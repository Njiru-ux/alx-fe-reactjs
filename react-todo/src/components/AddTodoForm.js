import React, { useState } from "react";

function AddTodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addTodo(text);
    setText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        placeholder="Add todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="todo-button" type="submit">
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;