import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesRoutingModule } from './movies/movies-routing.module';
import { CounterPageComponent } from './screens/counter-page/counter-page.component';
import { ToDoPageComponent } from './screens/to-do-page/to-do-page.component';

const routes: Routes = [
  {
    path: 'counter',
    component: CounterPageComponent,
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./movies/movies.module').then((m) => m.MoviesModule),
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
