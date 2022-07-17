import Board from "./components/Board";
import DragDropFiles from "./components/FileUploader";
import SortableList from "./components/SortableList";
import "./App.css";


const App = () => {
  return (
    <div className="container">
      {/* <DragDropFiles /> */}
      <SortableList />
    </div>
  )
};

export default App;