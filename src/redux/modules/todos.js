const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const EDIT_TODO = "EDIT_TODO";
// const DETAIL_TODO = "DETAIL_TODO";

export const onSubmitTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const onDeleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const onEditTodo = (id) => {
  return {
    type: EDIT_TODO,
    payload: id,
  };
};

// export const detailTodo = (todo) => {
//   return {
//     type: DETAIL_TODO,
//     payload: todo,
//   };
// };
const initialState = [
  {
    id: 1231244,
    title: "항해99 수료하기",
    body: "끝까지 잘 해보자",
    isDone: false,
  },
];

const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return [...state, { ...payload }];
    case DELETE_TODO:
      return [...state].filter((todo) => todo.id !== payload.id);
    case EDIT_TODO:
      return [...state].map((todo) =>
        todo.id === payload.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    // case DETAIL_TODO:
    //   console.log("1", action);
    //   return [...state].filter((todo) => todo.id === payload.id);

    default:
      return state;
  }
};

export default todos;
