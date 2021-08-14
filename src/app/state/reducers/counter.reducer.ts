import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from '../actions/counter.action';

const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (_) => 0)
);

export default function counterReducer(state: any, action: Action) {
  return _counterReducer(state, action);
}
