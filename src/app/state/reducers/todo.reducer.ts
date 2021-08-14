import { createReducer, on, Action } from '@ngrx/store';
import IToDo from 'src/app/core/interfaces/todo.interface';
import {
  addTodoAction,
  clearTodoAction,
  deleteTodoAction,
} from '../actions/todo.action';
import {
  addTodoEffect,
  clearTodoEffect,
  deleteTodoEffect,
} from '../effects/todo.effect';

const initialState: IToDo[] = [
  {
    id: Date.now(),
    text: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    createdAt: new Date(),
  },
];

const _todoReducer = createReducer(
  initialState,
  on(addTodoAction, addTodoEffect),
  on(deleteTodoAction, deleteTodoEffect),
  on(clearTodoAction, clearTodoEffect)
);

export default function todoReducer(state: any, action: Action) {
  return _todoReducer(state, action);
}
