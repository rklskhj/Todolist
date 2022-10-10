import { createSlice } from "@reduxjs/toolkit";

// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";
// const EDIT_TODO = "EDIT_TODO";
// // const DETAIL_TODO = "DETAIL_TODO";

// export const onSubmitTodo = (todo) => {
//   return {
//     type: ADD_TODO,
//     payload: todo,
//   };
// };

// export const onDeleteTodo = (id) => {
//   return {
//     type: DELETE_TODO,
//     payload: id,
//   };
// };

// export const onEditTodo = (id) => {
//   return {
//     type: EDIT_TODO,
//     payload: id,
//   };
// };

// // export const detailTodo = (todo) => {
// //   return {
// //     type: DETAIL_TODO,
// //     payload: todo,
// //   };
// // };

const initialState = [
  {
    id: 1231244,
    title: "항해99 수료하기",
    body: "끝까지 잘 해보자",
    isDone: false,
    like: 0,
  },
];

// const todos = (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case ADD_TODO:
//       return [...state, { ...payload }];
//     case DELETE_TODO:
//       return [...state].filter((todo) => todo.id !== payload.id);
//     case EDIT_TODO:
//       return [...state].map((todo) =>
//         todo.id === payload.id ? { ...todo, isDone: !todo.isDone } : todo
//       );
//     // case DETAIL_TODO:
//     //   console.log("1", action);
//     //   return [...state].filter((todo) => todo.id === payload.id);

//     default:
//       return state;
//   }
// };

// export default todos;

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      console.log("add", action);
      state.push(action.payload);
    },
    deleteTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload.id); //물어보기
    },
    editTodo(state, action) {
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
    addLikeTodo: (state, action) => {
      return state.map(
        (todo) =>
          todo.id === action.payload.id
            ? { ...todo, like: todo.like + 1 }
            : todo
        //해당 아이디 값의 like때문에 map으로 아이디를 찾은 후 그 id의 like를 늘려준다!
      );
    },
  },
});

console.log("www", todosSlice);

export const { addTodo, deleteTodo, editTodo, addLikeTodo } =
  todosSlice.actions; //여기있는 함수들을 전부 export 시키겠다 구조분해 할당시킴
export default todosSlice.reducer;
