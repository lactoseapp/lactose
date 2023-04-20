"use client";
import CodeMirror from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";

const CodeMirrorEditor = () => {
  return <CodeMirror value="Hello World" extensions={[markdown()]} />;
};

export default CodeMirrorEditor;
