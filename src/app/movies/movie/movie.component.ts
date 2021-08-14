import { Component, Input, OnInit } from '@angular/core';
import IMovie from 'src/app/core/interfaces/movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movie: IMovie = {} as IMovie;
  constructor() {}

  ngOnInit(): void {}
}
