import { NextResponse } from 'next/server';
import { requireAdmin } from '../../../../src/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Proxies an admin file upload to the self-hosted oracle-uploadthing service
// (or any compatible upstream that accepts POST {base}/api/upload with a
// Bearer token, an X-Project-Name header and a multipart "file" field).
//
// Required env:
//   UPLOADTHING_BASE_URL   e.g. https://uploads.simplifyqa.app
//   UPLOADTHING_API_TOKEN  the API_TOKEN configured on that service
//   UPLOADTHING_PROJECT    e.g. simplifyqa-blog
export async function POST(req: Request) {
  try {
    await requireAdmin();
  } catch (err) {
    const e = err as Error & { status?: number };
    if (e.status === 401) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
    if (e.status === 403) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    throw err;
  }

  const base = process.env.UPLOADTHING_BASE_URL;
  const token = process.env.UPLOADTHING_API_TOKEN;
  const project = process.env.UPLOADTHING_PROJECT || 'simplifyqa-blog';

  if (!base || !token) {
    return NextResponse.json(
      {
        error:
          'Upload service is not configured. Set UPLOADTHING_BASE_URL and UPLOADTHING_API_TOKEN.',
      },
      { status: 503 },
    );
  }

  const incoming = await req.formData();
  const file = incoming.get('file');
  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'No file provided in "file" field' }, { status: 400 });
  }

  const fwd = new FormData();
  fwd.append('file', file, file.name);

  let res: Response;
  try {
    res = await fetch(`${base.replace(/\/$/, '')}/api/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Project-Name': project,
      },
      body: fwd,
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'Upload service unreachable', details: (err as Error).message },
      { status: 502 },
    );
  }

  const text = await res.text();
  let json: any;
  try {
    json = JSON.parse(text);
  } catch {
    json = { raw: text };
  }

  if (!res.ok) {
    return NextResponse.json(
      { error: json.message || json.error || 'Upload failed', upstreamStatus: res.status },
      { status: res.status },
    );
  }

  return NextResponse.json({
    url: json.file?.publicUrl,
    name: json.file?.name,
    contentType: json.file?.contentType,
    size: json.file?.size,
  });
}
