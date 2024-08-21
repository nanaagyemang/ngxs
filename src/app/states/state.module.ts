import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsModule } from '@ngxs/store';
import { TodoState } from './todo.state';
import { TodoService } from '../services/todo.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsRouterPluginModule.forRoot(),
    NgxsModule.forRoot([
      TodoState
    ],
    {}
)
  ],
  providers:[
    TodoService
  ]
})
export class StatesModule { }
