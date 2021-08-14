import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesPageComponent,
  },
  {
    path: ':id',
    component: MoviePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
