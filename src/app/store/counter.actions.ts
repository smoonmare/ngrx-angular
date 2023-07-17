import { createAction, props } from "@ngrx/store";
import { Action } from "@ngrx/store";

// Recommended
// export const increment = createAction(
//   '[Counter] Increment',
//   props<{value: number}>()
// );

// Alternative manual way
export class IncrementAction implements Action {
  readonly type = '[Counter] Increment';

  constructor(public value: number) {}
}

export const decrement = createAction(
  '[Counter] Decrement'
);