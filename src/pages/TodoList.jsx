import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheck, FaTimes, FaArrowLeft, FaTrash } from "react-icons/fa";

const TodoList = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearAll = () => {
    if (window.confirm("Are you sure you want to clear all tasks?")) {
      setTodos([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E3A8A]/40 text-white flex flex-col items-center pt-20 px-4 pb-8">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-4 sm:left-6 flex items-center gap-2 px-4 py-2 bg-blue-600/80 hover:bg-blue-600 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 z-10"
      >
        <FaArrowLeft className="text-sm" />
        <span className="hidden sm:inline">Back</span>
      </button>

      <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-8 animate-fadeIn">
        Todo List
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl mb-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new task..."
          className="flex-1 px-4 py-3 rounded-xl bg-[#1E3A8A]/80 backdrop-blur-sm text-white border border-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-blue-400/50"
        />
        <button
          onClick={addTask}
          className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all font-semibold transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
        >
          Add Task
        </button>
      </div>

      {todos.length > 0 && (
        <button
          onClick={clearAll}
          className="mb-4 px-6 py-2 bg-red-600/80 hover:bg-red-600 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/50 flex items-center gap-2"
        >
          <FaTrash className="text-sm" />
          Clear All
        </button>
      )}

      <ul className="mt-4 w-full max-w-2xl space-y-3">
        {todos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-blue-300 text-lg">No tasks added yet!</p>
            <p className="text-blue-400/70 text-sm mt-2">
              Add a task to get started
            </p>
          </div>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex justify-between items-center gap-3 px-4 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${
                todo.completed
                  ? "bg-green-600/30 border-2 border-green-500/50"
                  : "bg-[#1E3A8A]/80 backdrop-blur-sm border border-blue-700/50 hover:border-blue-500/50"
              }`}
            >
              <span
                className={`flex-1 ${
                  todo.completed
                    ? "line-through text-green-300 opacity-75"
                    : "text-white"
                } transition-all duration-300`}
              >
                {todo.text}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleComplete(todo.id)}
                  className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                    todo.completed
                      ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                      : "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                  }`}
                  title={todo.completed ? "Mark as incomplete" : "Mark as complete"}
                >
                  {todo.completed ? (
                    <FaTimes className="text-lg" />
                  ) : (
                    <FaCheck className="text-lg" />
                  )}
                </button>
                <button
                  onClick={() => removeTask(todo.id)}
                  className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all duration-300 transform hover:scale-110"
                  title="Delete task"
                >
                  <FaTrash className="text-sm" />
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
