import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterPageComponent } from './screens/counter-page/counter-page.component';
import { ToDoPageComponent } from './screens/to-do-page/to-do-page.component';

const routes: Routes = [
  {
    path: 'counter',
    component: CounterPageComponent,
  },
  {
    path: 'to_do',
    component: ToDoPageComponent,
  },
  {
    path: '**',
    redirectTo: 'counter',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
