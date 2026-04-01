import { memo } from "react";

const expensiveFunction = (value) => {
  const startTime = Date.now();

  while (Date.now() - startTime <= value) {
    continue;
  }

  return true;
};

const TodoList = ({ todo, handleDelete, handleEdits }) => {
  expensiveFunction(200);

  return (
    <>
      {todo &&
        todo.map((el) => {
          return (
            <div
              key={el.id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem auto",
                gap: "0.5rem",
              }}
            >
              <input type="checkbox" />
              <h3>{el.text}</h3>
              <button onClick={() => handleEdits(el.id)}>edit</button>
              <button onClick={() => handleDelete(el.id)}>delete</button>
            </div>
          );
        })}
    </>
  );
};

const expensiveCalculationFn = (prevValue, currValue) => {
  return (
    prevValue.todo.length === currValue.todo.length &&
    prevValue.todo.every(
      (el, index) =>
        el.isEdits === currValue.todo[index].isEdits
    )
  );
};

export const TodoLists = memo(TodoList, expensiveCalculationFn);