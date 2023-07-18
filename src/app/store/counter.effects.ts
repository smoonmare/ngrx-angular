import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects'
import { decrement, increment, init, set } from './counter.actions';
import { withLatestFrom, tap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selectors';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class CounterEffects {
  loadCount = createEffect(() => this.actions$.pipe(
    ofType(init),
    switchMap(() => {
      const storedCount = localStorage.getItem('count');
      if (storedCount) {
        return of(set({value: +storedCount}));
      }
      return of(set({value: 0}));
    })
  ));

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