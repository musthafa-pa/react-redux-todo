import { useDispatch } from "react-redux";
import { addTodo } from "../../store/reducer";
import { v4 as uuidv4 } from "uuid";

export default function AddTodo() {
  const dispatch = useDispatch();
  const createTodo = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        todo: document.getElementById("create-todo-input").value,
        completed: false,
      })
    );
  };
  return (
    <>
      <div className="create-todo">
        <input
          type="text"
          className="create-todo-input"
          placeholder="Add Todo..."
          id="create-todo-input"
        />
        <button className="create-todo-btn" onClick={() => createTodo()}>
          CREATE
        </button>
      </div>
    </>
  );
}
