import React, { useState, useRef } from "react";

const Todo = () => {
  const [todos, setTodos] = useState(["learn html", "css"]);
  const toDoRef = useRef();

  const addTodo = () => {
    const item = toDoRef.current.value;
    setTodos((prevTodos) => [...prevTodos, item]);
    toDoRef.current.value = "";  // Clear the input field after adding a todo
  };

  return (
    <div>
      <div>
        <input type="text" ref={toDoRef} />
        <button onClick={addTodo}>Add todo</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
