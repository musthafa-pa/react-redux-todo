import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoReducer = createSlice({
  name: "todoReducer",
  initialState: {
    todos: [
      {
        id: uuidv4(),
        todo: "Buy Groceries",
        completed: true,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    completeTodo: (state, action) => {
      const { id, completed } = action.payload;
      return state.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.completed = completed;
        }
      });
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    },
  },
});

export const { addTodo, completeTodo, deleteTodo } = todoReducer.actions;
export const reducer = todoReducer.reducer;
