import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./components/addTodo/addTodo";
import Todos from "./components/todos/todos";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
