import { Component, OnInit } from '@angular/core';
import IMovie from 'src/app/core/interfaces/movie.interface';
import { MOVIES } from 'src/app/data/movies_data';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css'],
})
export class MoviesPageComponent implements OnInit {
  movies: IMovie[] = MOVIES;

  constructor() {}

  ngOnInit(): void {}
}
