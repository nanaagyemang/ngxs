import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoState } from './states/todo.state';
import { StatesModule } from './states/state.module';
import { AppLayoutModule } from './app-layout/app-layout.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
       StatesModule,
       AppLayoutModule,
       AppRoutingModule,
       BrowserModule
        
    ],
    providers: [],
    bootstrap: [AppComponent]
   
})
export class AppModule {
}