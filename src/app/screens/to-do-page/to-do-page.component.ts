import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import IToDo from 'src/app/core/interfaces/todo.interface';
import {
  addTodoAction,
  clearTodoAction,
  deleteTodoAction,
} from 'src/app/state/actions/todo.action';

@Component({
  selector: 'app-to-do-page',
  templateUrl: './to-do-page.component.html',
  styleUrls: ['./to-do-page.component.css'],
})
export class ToDoPageComponent implements OnInit {
  public todos: Observable<IToDo[]>;
  public todoInput: string = '';
  public todosLength: number = 0;

  constructor(private store: Store<{ todos: IToDo[] }>) {
    this.todos = store.select('todos');
  }

  ngOnInit(): void {
    this.todos.subscribe((value) => (this.todosLength = value.length));
  }

  addTodo() {
    if (this.todoInput.length == 0) return;
    const todo = {
      text: this.todoInput,
      id: Date.now(),
      createdAt: new Date(),
    };
    this.store.dispatch(addTodoAction(todo));
    this.todoInput = '';
  }
  deleteTodo(id: number) {
    this.store.dispatch(deleteTodoAction({ id }));
  }
  clearTodos() {
    this.store.dispatch(clearTodoAction());
  }
}
