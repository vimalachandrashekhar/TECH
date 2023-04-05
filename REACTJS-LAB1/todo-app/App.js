import React, { useState, useEffect } from "react";
import TodoList from "./component/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const task = e.target.task.value;
          addTodo(task);
          e.target.task.value = "";
        }}
      >
        <input type="text" name="task" placeholder="Add a task" required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
