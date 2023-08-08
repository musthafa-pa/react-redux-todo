import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/style.css";
import { completeTodo, deleteTodo } from "../../store/reducer";

export default function Todos() {
  const { todos } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("TODOS", todos);
  }, [todos]);

  const completeTodos = (e, id) => {
    dispatch(
      completeTodo({
        id: id,
        completed: e.target.checked,
      })
    );
  };

  const deleteTodos = (id) => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  };
  return (
    <>
      <div className="todo-list">
        {todos &&
          todos.map((todo) => {
            return (
              <div className="todo">
                <input
                  type="checkbox"
                  id="todo-input"
                  checked={todo.completed}
                  onClick={(e) => completeTodos(e, todo.id)}
                />
                <p>{todo.todo}</p>
                <button
                  className="delete-todo-btn"
                  onClick={() => deleteTodos(todo.id)}
                >
                  DELETE
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}
