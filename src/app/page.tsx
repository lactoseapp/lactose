import MilkdownEditor from "./components/MilkdownEditor";
import CodeMirrorEditor from "./components/CodeMirrorEditor";
import { EditorContentProvider } from "./context/EditorContent";
const Home = () => {
  return (
    <div>
      <EditorContentProvider>
        <MilkdownEditor />
        <CodeMirrorEditor />
      </EditorContentProvider>
    </div>
  );
};
export default Home;
