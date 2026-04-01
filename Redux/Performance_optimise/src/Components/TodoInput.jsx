import { useState } from "react";
import { TodoLists } from "./TodoList";

export const TodoInput = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([
    { id: 1774931765776, text: "prev", isEdits: false, isCompletes: false },
    { id: 1774931770288, text: "prev1", isEdits: false, isCompletes: false },
  ]);

  const handleData = () => {
    const todos = {
      id: Date.now(),
      text,
      isEdits: false,
      isCompletes: false,
    };

    setTodo((prev) => [...prev, todos]);
  };

  const handleEdits = (id) => {
    let valueEdit = todo.map((el) =>
      el.id === id ? { ...el, isEdits: true } : el
    );

    setTodo(valueEdit);
  };

  const handleDelete = (id) => {
    let filtered = todo.filter((el) => el.id !== id);
    setTodo(filtered);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1rem auto",
          gap: "0.5rem",
        }}
      >
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleData}>Add</button>
      </div>

      <TodoLists
        todo={todo}
        handleEdits={handleEdits}
        handleDelete={handleDelete}
      />
    </>
  );
};