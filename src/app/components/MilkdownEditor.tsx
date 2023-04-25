"use client";
import { Editor, rootCtx } from "@milkdown/core";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";
import { commonmark } from "@milkdown/preset-commonmark";
import { listener, listenerCtx } from "@milkdown/plugin-listener";
import { useRef, useEffect } from "react";
import { useEditorContent } from "../context/EditorContent";
import { replaceAll } from "@milkdown/utils";

const EditorComponent: React.FC = () => {
  const isFocused = useRef(false);
  const { setEditorContent, editorContent } = useEditorContent();
  const editor = useEditor((root) =>
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, root);
        const listener = ctx.get(listenerCtx);
        listener.blur((ctx) => (isFocused.current = false));
        listener.focus((ctx) => (isFocused.current = true));
        listener.markdownUpdated((ctx, markdown, prevmarkdown) => {
          if (!isFocused.current) return;
          if (markdown === prevmarkdown) return;
          setEditorContent(markdown);
        });
      })
      .use(listener)
      .use(commonmark)
  );
  useEffect(() => {
    const e = editor.get();
    if (!e) return;
    if (isFocused.current) return;
    e.action(replaceAll(editorContent));
  }, [editorContent]);
  return <Milkdown />;
};

export const MilkdownEditor: React.FC = () => {
  return (
    <MilkdownProvider>
      <EditorComponent />
    </MilkdownProvider>
  );
};

export default MilkdownEditor;
