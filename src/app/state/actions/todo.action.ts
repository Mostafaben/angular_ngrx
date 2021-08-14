import { createAction, props } from '@ngrx/store';
import IToDo from 'src/app/core/interfaces/todo.interface';

export const addTodoAction = createAction('[todo] add', props<IToDo>());
export const deleteTodoAction = createAction(
  '[todo] delete',
  props<{ id: number }>()
);
export const clearTodoAction = createAction('[todo] clear');
