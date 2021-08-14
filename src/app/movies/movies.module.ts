import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [MoviesPageComponent, MoviePageComponent, MovieComponent],
  imports: [CommonModule, MoviesRoutingModule],
})
export class MoviesModule {}
