import IToDo from 'src/app/core/interfaces/todo.interface';

export function addTodoEffect(state: IToDo[], todo: IToDo) {
  return [todo, ...state];
}

export function deleteTodoEffect(state: IToDo[], props: { id: number }) {
  return [...state].filter((todo) => todo.id != props.id);
}

export function clearTodoEffect() {
  return [];
}
