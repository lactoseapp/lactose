"use client";
import { createContext, useContext, useState } from "react";

type EditorContentContextType = {
  editorContent: string;
  setEditorContent: (content: string) => void;
};

const EditorContentContext = createContext<EditorContentContextType>({
  editorContent: "",
  setEditorContent: () => {},
});

export const useEditorContent = () => {
  if (!useContext) {
    throw new Error(
      "useEditorContent must be used within a EditorContentProvider"
    );
  }
  return useContext(EditorContentContext);
};

export const EditorContentProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [editorContent, setEditorContent] = useState("");

  return (
    <EditorContentContext.Provider value={{ editorContent, setEditorContent }}>
      {children}
    </EditorContentContext.Provider>
  );
};
