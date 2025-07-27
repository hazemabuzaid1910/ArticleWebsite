import React, { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Heading from '@tiptap/extension-heading';
import { IoCloudUploadOutline } from 'react-icons/io5';

function AddArticles() {
  const [article, setArticle] = useState('');

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Image.configure({
        inline: false,
        HTMLAttributes: {
          class: 'my-4 mx-auto',
        },
      }),
    ],
    content: '',
    onUpdate: ({ editor }) => {
      setArticle(editor.getHTML());
    },
  });

  const addImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        editor
          ?.chain()
          .focus()
          .setImage({ src: reader.result })
          .run();
      };

      reader.readAsDataURL(file);
    };

    input.click();
  };

  return (
    <div className="max-w-4xl min-h-screen p-6 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Write Article</h1>

      <div className="min-h-screen border">
        <div className="flex flex-wrap items-center gap-2 p-2 bg-gray-100 border-b">
          <button
            onClick={addImage}
            className="px-3 flex items-center gap-2 py-1 text-sm text-white bg-[#e75032] rounded"
          >
            Upload Image <IoCloudUploadOutline />
          </button>

          <button
            onClick={() => editor?.chain().focus().toggleBold().run()}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            bold
          </button>

          <button
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            italic
          </button>

          <div className="flex items-center gap-1">
            <input
              type="color"
              onChange={(e) => editor?.chain().focus().setColor(e.target.value).run()}
              className="w-8 h-8 p-0 border border-gray-300 rounded"
            />
          </div>

          <select
            onChange={(e) =>
              editor
                ?.chain()
                .focus()
                .setMark('textStyle', { style: `font-size: ${e.target.value}` })
                .run()
            }
            className="px-2 py-1 bg-gray-200 rounded"
          >
            <option value="12px">24px</option>
            <option value="16px">48px</option>
            <option value="20px">64px</option>
            <option value="24px"> 80px</option>
          </select>
        </div>

        <EditorContent editor={editor} className="p-4 min-h-[200px] ProseMirror" />
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => console.log('محتوى المقال:', article)}
          className="px-6 py-2  text-white bg-[var(--orange-color)] cursor-pointer rounded hover:bg-orange-400"
        >
          Publish
        </button>
      </div>
    </div>
  );
}

export default AddArticles;
