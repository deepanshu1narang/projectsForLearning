import React, { useReducer } from "react";
import { useState } from "react";
import List from "./List";

const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo",
};

const initialTodos = [];

// I'll deal with you later

function todoReducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.task)];
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.TOGGLE_TODO:
      todos.map(todo => {
        if(todo.id === action.payload.id){
            return {...todo, completed: !todo.completed}
        }
        else
            return todo;
      })
    default:
      return [...todos];
  }
}

function newTodo(task) {
  return { id: Date.now(), task: task, completed: false };
}

////////////////////////////////////////////////////////////////////////////////////////

export default function ToDoList() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [task, setTask] = useState("");
  // const [isCompleted, setIsCompleted] = useState(false);

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { task: task } });
    // dispatch(action-object);.... dispatch this action
    console.log(todos);
    setTask("");
  };

  console.log(todos);

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          name="addTaskInList"
          type="text"
          value={task}
          onChange={handleChange}
          style={{padding: "0.4%"}}
        />
        <button style={{ margin: "1vw" }}>Submit</button>
      </form>

      <ul id="todo-list-ul" type="none">
        {todos.map((todo, i) => {
          return (
            <li key={todo.id}>
              <List
                taskNo={i + 1}
                taskAdded={todo.task}
                deleteTask={() =>
                  dispatch({
                    type: ACTIONS.DELETE_TODO,
                    payload: { id: todo.id },
                  })
                }
                toggleTask={() => {
                    console.log("working")
                    dispatch({
                        type: ACTIONS.TOGGLE_TODO, 
                        payload: {id: todo.id}
                    })
                }}
                checkBoxHandler = {() => {}}
              />
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}
