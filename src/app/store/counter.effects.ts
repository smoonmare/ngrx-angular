import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects'
import { decrement, increment } from './counter.actions';
import { withLatestFrom, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selectors';

@Injectable()
export class CounterEffects {
  saveCount = createEffect(() => this.actions$.pipe(
    ofType(increment, decrement),
    withLatestFrom(this.store.select(selectCount)),
    tap(([action, counter]) => {
      console.log(action);
      localStorage.setItem('count', counter.toString());
      localStorage.setItem('countChange', action.value.toString());
    })
  ), {dispatch: false});

  constructor(
    private store: Store<{counter: number}>,
    private actions$: Actions
  ) {}
}