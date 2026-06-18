#!/usr/bin/env node
// One-shot codemod: convert react-router-dom usage to Next.js patterns.
// - Adds 'use client' to the top of every .tsx in scanned dirs (idempotent).
// - Rewrites react-router-dom imports to next/link + next/navigation.
// - Renames `to=` -> `href=` on Link / NavLink JSX props.
// - Replaces <NavLink ...> with <Link ...>.
import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOTS = [
  'src/redesign',
  'src/design',
];

async function walk(dir, out = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walk(full, out);
    else if (e.isFile() && full.endsWith('.tsx')) out.push(full);
  }
  return out;
}

function transform(src) {
  let s = src;

  // 1) Replace `import { Link, NavLink } from 'react-router-dom';`
  s = s.replace(
    /import\s*\{\s*Link\s*,\s*NavLink\s*\}\s*from\s*['"]react-router-dom['"];?/g,
    `import Link from 'next/link';\nimport { usePathname } from 'next/navigation';`,
  );

  // 2) `import { Link, useParams } from 'react-router-dom';`
  s = s.replace(
    /import\s*\{\s*Link\s*,\s*useParams\s*\}\s*from\s*['"]react-router-dom['"];?/g,
    `import Link from 'next/link';\nimport { useParams } from 'next/navigation';`,
  );

  // 3) `import { Link } from 'react-router-dom';`
  s = s.replace(
    /import\s*\{\s*Link\s*\}\s*from\s*['"]react-router-dom['"];?/g,
    `import Link from 'next/link';`,
  );

  // 4) Generic catch-all for any other react-router-dom import — leave a TODO marker
  s = s.replace(
    /from\s*['"]react-router-dom['"]/g,
    `from 'next/navigation' /* TODO verify after codemod */`,
  );

  // 5) Replace `<NavLink ` with `<Link ` and `</NavLink>` with `</Link>`
  s = s.replace(/<NavLink(\s)/g, '<Link$1');
  s = s.replace(/<\/NavLink>/g, '</Link>');

  // 6) Rename `to=` -> `href=` on Link JSX.
  //    These files only used `to=` for react-router Link/NavLink.
  s = s.replace(/(\<Link[^>]*?)\bto=/g, '$1href=');
  // Handle multi-line Link props where `to=` is on its own line
  // Conservative: replace `to={...}` and `to="..."` occurring on their own indented line.
  s = s.replace(/^(\s*)to=(\{|\")/gm, '$1href=$2');

  // 7) Prepend `'use client';` if not already present.
  if (!/^\s*['"]use client['"]/.test(s)) {
    s = `'use client';\n\n` + s;
  }

  return s;
}

const root = process.cwd();
let touched = 0;
for (const dir of ROOTS) {
  const abs = path.join(root, dir);
  let files = [];
  try { files = await walk(abs); } catch { continue; }
  for (const f of files) {
    const before = await fs.readFile(f, 'utf8');
    const after = transform(before);
    if (before !== after) {
      await fs.writeFile(f, after);
      touched++;
      console.log('rewrote', path.relative(root, f));
    }
  }
}
console.log(`\nDone. Files modified: ${touched}`);
