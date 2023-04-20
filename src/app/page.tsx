import MilkdownEditor from "./components/MilkdownEditor";
import CodeMirrorEditor from "./components/CodeMirrorEditor";
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>
      <MilkdownEditor />
      <CodeMirrorEditor />
    </div>
  );
};
export default Home;
