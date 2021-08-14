import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterPageComponent } from './screens/counter-page/counter-page.component';
import { ToDoPageComponent } from './screens/to-do-page/to-do-page.component';
import counterReducer from './state/reducers/counter.reducer';
import todoReducer from './state/reducers/todo.reducer';

@NgModule({
  declarations: [AppComponent, CounterPageComponent, ToDoPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      counter: counterReducer,
      todos: todoReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
