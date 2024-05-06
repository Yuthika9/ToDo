import "./styles.css";
import Header from "./Components/Header.js";
import ToDoList from "./Components/ToDoList.js";

export default function App() {
  return (
    <div className="Application">
      <Header />
      <ToDoList />
    </div>
  );
}
