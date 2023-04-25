"use client";
import CodeMirror from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { useEditorContent } from "../context/EditorContent";
import { useRef } from "react";

const CodeMirrorEditor = () => {
  const { editorContent, setEditorContent } = useEditorContent();
  const editorRef = useRef(null);

  const handleChange = (value: string) => {
    setEditorContent(value);
  };
  return (
    <CodeMirror
      value={editorContent}
      extensions={[markdown()]}
      onChange={handleChange}
      ref={editorRef}
    />
  );
};

export default CodeMirrorEditor;
