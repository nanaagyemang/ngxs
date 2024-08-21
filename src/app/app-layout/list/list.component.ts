import { Component, OnInit } from '@angular/core';
import { TodoState } from '../../states/todo.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/Todo';
import { DeleteTodo, GetTodos, SetSelectedTodo } from '../../states/todo.action';

@Component({
  selector: 'app-list',
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  constructor(private store:Store){}
  @Select(TodoState.getTodoList) todos!: Observable<Todo[]>;
  ngOnInit(){
     this.store.dispatch(new GetTodos());
  }

  deleteTodo(id: number) {
    this.store.dispatch(new DeleteTodo(id));
}

editTodo(payload: Todo) {
    this.store.dispatch(new SetSelectedTodo(payload));
}

}
