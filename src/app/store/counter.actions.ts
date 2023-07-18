import { createAction, props } from "@ngrx/store";
// import { Action } from "@ngrx/store";

export const init = createAction(
  '[Counter] Init'
);

export const set = createAction(
  '[Counter] Set',
  props<{value: number}>()
);

// Recommended
export const increment = createAction(
  '[Counter] Increment',
  props<{value: number}>()
);

// // Alternative manual way
// export class IncrementAction implements Action {
//   readonly type = '[Counter] Increment';

//   constructor(public value: number) {}
// }

export const decrement = createAction(
  '[Counter] Decrement',
  props<{value: number}>()
);