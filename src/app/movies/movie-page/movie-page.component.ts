import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import IMovie from 'src/app/core/interfaces/movie.interface';
import { MOVIES } from 'src/app/data/movies_data';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent implements OnInit {
  id: string = '';
  movie: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params.id;
    this.movie = MOVIES.find((movie) => movie.id == this.id);
    if (!this.movie) this._router.navigateByUrl('/movies');
  }
}
