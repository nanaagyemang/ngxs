import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Todo } from '../models/Todo';
import { TodoService } from '../services/todo.service';
import { AddTodo, GetTodos } from '../actions/todo.action';
import { tap } from 'rxjs';

export class TodoStateModel {
  todos: Todo[] = [];
  selectedTodo: Todo | null = null;
}

@State<TodoStateModel>({
  name: 'todos',
  defaults: {
    todos: [],
    selectedTodo: null,
  },
})
export class TodoState {
  constructor(private todoService: TodoService) {}

  @Selector()
  static getTodoList(state: TodoStateModel) {
    return state.todos;
  }

  @Selector()
  static getSelectedTodo(state: TodoStateModel) {
    return state.selectedTodo;
  }

  @Action(GetTodos)
  getTodos({ getState, setState }: StateContext<TodoStateModel>) {
    return this.todoService.fetchTodos().pipe(
      tap((result) => {
        const state = getState();
        setState({
          ...state,
          todos: result,
        });
      })
    );
  }

  @Action(AddTodo)
  addTodo({getState,patchState}: StateContext<TodoStateModel>,{payload}: AddTodo){
      return this.todoService.addTodo(payload).pipe(tap((result=>{
        const state = getState();
        patchState({
            todos:[...state.todos, result]
        })
      })))
  }
}
