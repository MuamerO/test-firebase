import "./App.css";

import ReadItem from "./components/ReadItem";
import AddItem from "./components/AddItem";

function App() {
  return (
    <>
      <AddItem />
      <h1>Database contains</h1>
      <ReadItem />
    </>
  );
}

export default App;
