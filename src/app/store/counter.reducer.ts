import { createReducer, on } from "@ngrx/store";
import { decrement, increment } from "./counter.actions";
// import { decrement } from "./counter.actions";

const initialState = 0;

// Recommended
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value) 
);

// // Alternative manual way
// export function counterReducer(state = initialState, action: any) {
//   if (action.type === '[Counter] Increment') {
//     return state + action.value;
//   }
//   return state;
// }