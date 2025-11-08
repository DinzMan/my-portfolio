import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const removeTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex flex-col items-center pt-20 px-4">
      <h1 className="text-4xl font-bold text-blue-400 mb-8">Todo List</h1>
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task..."
          className="flex-1 px-4 py-3 rounded-xl bg-[#1E3A8A] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-500 transition-all font-semibold"
        >
          Add
        </button>
      </div>

      <ul className="mt-8 w-full max-w-md space-y-3">
        {todos.length === 0 ? (
          <p className="text-blue-300 text-center">No tasks added yet!</p>
        ) : (
          todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-[#1E3A8A] px-4 py-3 rounded-xl shadow-md hover:shadow-blue-500/40 transition-all"
            >
              <span>{todo}</span>
              <button
                onClick={() => removeTask(index)}
                className="text-red-400 hover:text-red-300 transition-all"
              >
                ✖
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
