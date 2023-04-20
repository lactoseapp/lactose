"use client";
import { Editor, rootCtx } from "@milkdown/core";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";
import { commonmark } from "@milkdown/preset-commonmark";

const EditorComponent: React.FC = () => {
  useEditor((root) =>
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, root);
      })
      .use(commonmark)
  );

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
