import { useEffect, useState } from "react";

import "./App.css";
import { TodoProvider } from './Context';  // Not from Components, but from Context
import { TodoForm, TodoItem } from './Components';  // Import both TodoForm and TodoItem
// Correct import from the Components folder

function App() {
  const [todos, setTodos] = useState([]);
  

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev)=> prev.map((prevTodo)=> (
      prevTodo.id === id
      ? todo
      : prevTodo
    )))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = localStorage.getItem("todos"); // Get the string from localStorage
    if (todos) {
      setTodos(JSON.parse(todos)); // Parse it to JSON
    }
  }, []);
  

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  

  return (
    <TodoProvider value={{ addTodo, updateTodo, deleteTodo, toggleComplete }}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">
          <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  </TodoProvider>
  
  );
}

export default App;
