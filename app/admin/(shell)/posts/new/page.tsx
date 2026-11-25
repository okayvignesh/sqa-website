import PostEditor from '../../../../../src/components/admin/PostEditor';
import { getCurrentUser } from '../../../../../src/lib/auth';

export const dynamic = 'force-dynamic';

export default async function NewPostPage() {
  const user = await getCurrentUser();
  return <PostEditor mode="new" defaultAuthorName={user?.name || user?.email || ''} />;
}
