import { ADD_TODO, DELETE_TODO } from "./Action";

const initialState = {
  todos: [],
};

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item, index) => index !== payload),
      };

    default:
      return state;
  }
};

export { Reducer };