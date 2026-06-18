'use client';

import { useCallback, useEffect, useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { Underline } from '@tiptap/extension-underline';
import { Link } from '@tiptap/extension-link';
import { Image } from '@tiptap/extension-image';
import { Placeholder } from '@tiptap/extension-placeholder';
import { TextAlign } from '@tiptap/extension-text-align';
import { Highlight } from '@tiptap/extension-highlight';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import { TaskList } from '@tiptap/extension-task-list';
import { TaskItem } from '@tiptap/extension-task-item';
import { Typography } from '@tiptap/extension-typography';
import { Youtube } from '@tiptap/extension-youtube';
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight';
import { common, createLowlight } from 'lowlight';
import {
  Bold, Italic, UnderlineIcon, Strikethrough, Code, Quote, List, ListOrdered,
  ListChecks, Heading1, Heading2, Heading3, Link2, Image as ImageIcon, Youtube as YoutubeIcon,
  AlignLeft, AlignCenter, AlignRight, Highlighter, Minus, Table as TableIcon, Undo2, Redo2,
  Loader2,
} from 'lucide-react';

const lowlight = createLowlight(common);

type Props = {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
};

export default function RichEditor({ value, onChange, placeholder }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      Underline,
      Link.configure({ openOnClick: false, autolink: true, HTMLAttributes: { class: 'tiptap-link' } }),
      Image.configure({ HTMLAttributes: { class: 'tiptap-image' } }),
      Placeholder.configure({ placeholder: placeholder || 'Write your story…' }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Highlight.configure({ multicolor: false }),
      Table.configure({ resizable: true, HTMLAttributes: { class: 'tiptap-table' } }),
      TableRow,
      TableHeader,
      TableCell,
      TaskList,
      TaskItem.configure({ nested: true }),
      Typography,
      Youtube.configure({ inline: false, controls: true, HTMLAttributes: { class: 'tiptap-youtube' } }),
      CodeBlockLowlight.configure({ lowlight, HTMLAttributes: { class: 'tiptap-code' } }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class: 'tiptap-prose focus:outline-none min-h-[420px] px-6 py-6 max-w-none',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;
    if (value !== editor.getHTML()) {
      editor.commands.setContent(value || '', { emitUpdate: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, editor]);

  const uploadImage = useCallback(
    async (file: File) => {
      if (!editor) return;
      const fd = new FormData();
      fd.append('file', file);
      const placeholderId = `uploading-${Date.now()}`;
      editor
        .chain()
        .focus()
        .insertContent(
          `<p data-uploading="${placeholderId}" class="text-ink-400 italic">Uploading ${file.name}…</p>`,
        )
        .run();

      try {
        const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
        if (!res.ok) {
          const j = await res.json().catch(() => ({}));
          throw new Error(j.error || 'Upload failed');
        }
        const j = await res.json();
        // Replace placeholder with the real image
        const html = editor.getHTML().replace(
          new RegExp(`<p data-uploading="${placeholderId}"[^>]*>[^<]*</p>`),
          `<img src="${j.url}" alt="${file.name.replace(/\.[^.]+$/, '')}" />`,
        );
        editor.commands.setContent(html, { emitUpdate: true });
      } catch (err) {
        const html = editor.getHTML().replace(
          new RegExp(`<p data-uploading="${placeholderId}"[^>]*>[^<]*</p>`),
          `<p class="text-brand-700">Failed to upload ${file.name}: ${(err as Error).message}</p>`,
        );
        editor.commands.setContent(html, { emitUpdate: true });
      }
    },
    [editor],
  );

  const onPickImage = () => fileInputRef.current?.click();

  const onPickFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (file) await uploadImage(file);
  };

  const onLink = () => {
    if (!editor) return;
    const prev = editor.getAttributes('link').href as string | undefined;
    const url = window.prompt('Link URL', prev || 'https://');
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const onYoutube = () => {
    if (!editor) return;
    const url = window.prompt('YouTube URL');
    if (!url) return;
    editor.commands.setYoutubeVideo({ src: url, width: 720, height: 405 });
  };

  const onInsertTable = () => {
    if (!editor) return;
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  };

  if (!editor) {
    return (
      <div className="rounded-2xl border border-ink-200 bg-white h-[480px] grid place-items-center text-ink-400">
        <Loader2 className="w-4 h-4 animate-spin" />
      </div>
    );
  }

  const isActive = (name: string, attrs?: Record<string, any>) => editor.isActive(name, attrs);

  return (
    <div className="rounded-2xl border border-ink-200 bg-white overflow-hidden">
      {/* Toolbar */}
      <div className="sticky top-16 z-10 bg-white/95 backdrop-blur border-b border-ink-200/70 px-2 py-1.5 flex flex-wrap items-center gap-0.5">
        <ToolGroup>
          <ToolBtn label="Undo" onClick={() => editor.chain().focus().undo().run()}>
            <Undo2 className="w-4 h-4" />
          </ToolBtn>
          <ToolBtn label="Redo" onClick={() => editor.chain().focus().redo().run()}>
            <Redo2 className="w-4 h-4" />
          </ToolBtn>
        </ToolGroup>

        <Divider />

        <ToolGroup>
          <ToolBtn
            label="H1"
            active={isActive('heading', { level: 1 })}
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          >
            <Heading1 className="w-4 h-4" />
          </ToolBtn>
          <ToolBtn
            label="H2"
            active={isActive('heading', { level: 2 })}
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          >
            <Heading2 className="w-4 h-4" />
          </ToolBtn>
          <ToolBtn
            label="H3"
            active={isActive('heading', { level: 3 })}
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          >
            <Heading3 className="w-4 h-4" />
          </ToolBtn>
        </ToolGroup>

        <Divider />

        <ToolGroup>
          <ToolBtn label="Bold" active={isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}>
            <Bold className="w-4 h-4" />
          </ToolBtn>
          <ToolBtn label="Italic" active={isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}>
            <Italic className="w-4 h-4" />
          </ToolBtn>
          <ToolBtn label="Underline" active={isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()}>
            <UnderlineIcon className="w-4 h-4" />
          </ToolBtn>
          <ToolBtn label="Strike" active={isActive('strike')} onClick={() => editor.chain().focus().toggleStrike().run()}>
            <Strikethrough className="w-4 h-4" />
          </ToolBtn>
          <ToolBtn label="Highlight" active={isActive('highlight')} onClick={() => editor.chain().focus().toggleHighlight().run()}>
            <Highlighter className="w-4 h-4" />
          </ToolBtn>
          <ToolBtn label="Code" active={isActive('code')} onClick={() => editor.chain().focus().toggleCode().run()}>
            <Code className="w-4 h-4" />
          </ToolBtn>
        </ToolGroup>

        <Divider />

        <ToolGroup>
          <ToolBtn label="Bullet list" active={isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}>
            <List className="w-4 h-4" />
          </ToolBtn>
          <ToolBtn label="Ordered list" active={isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
            <ListOrdered className="w-4 h-4" />
          </ToolBtn>
          <ToolBtn label="Task list" active={isActive('taskList')} onClick={() => editor.chain().focus().toggleTaskList().run()}>
            <ListChecks className="w-4 h-4" />
          </ToolBtn>
          <ToolBtn label="Quote" active={isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
            <Quote className="w-4 h-4" />
          </ToolBtn>
          <ToolBtn label="Code block" active={isActive('codeBlock')} onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
            <Code className="w-4 h-4" />
          </ToolBtn>
        </ToolGroup>

        <Divider />

        <ToolGroup>
          <ToolBtn label="Align left" active={isActive({ textAlign: 'left' } as any)} onClick={() => editor.chain().focus().setTextAlign('left').run()}>
            <AlignLeft className="w-4 h-4" />
          </ToolBtn>
          <ToolBtn label="Align center" active={isActive({ textAlign: 'center' } as any)} onClick={() => editor.chain().focus().setTextAlign('center').run()}>
            <AlignCenter className="w-4 h-4" />
          </ToolBtn>
          <ToolBtn label="Align right" active={isActive({ textAlign: 'right' } as any)} onClick={() => editor.chain().focus().setTextAlign('right').run()}>
            <AlignRight className="w-4 h-4" />
          </ToolBtn>
        </ToolGroup>

        <Divider />

        <ToolGroup>
          <ToolBtn label="Link" active={isActive('link')} onClick={onLink}>
            <Link2 className="w-4 h-4" />
          </ToolBtn>
          <ToolBtn label="Image" onClick={onPickImage}>
            <ImageIcon className="w-4 h-4" />
          </ToolBtn>
          <ToolBtn label="YouTube" onClick={onYoutube}>
            <YoutubeIcon className="w-4 h-4" />
          </ToolBtn>
          <ToolBtn label="Table" onClick={onInsertTable}>
            <TableIcon className="w-4 h-4" />
          </ToolBtn>
          <ToolBtn label="Divider" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
            <Minus className="w-4 h-4" />
          </ToolBtn>
        </ToolGroup>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onPickFile}
        />
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}

function ToolGroup({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-0.5">{children}</div>;
}

function Divider() {
  return <span className="mx-1 h-5 w-px bg-ink-200" />;
}

function ToolBtn({
  children,
  onClick,
  active,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      className={`grid place-items-center w-8 h-8 rounded-md transition-colors ${
        active ? 'bg-ink-900 text-white' : 'text-ink-600 hover:bg-ink-100 hover:text-ink-900'
      }`}
    >
      {children}
    </button>
  );
}
