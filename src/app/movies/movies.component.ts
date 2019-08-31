import { Component, OnInit } from '@angular/core';

import { MovieService } from './movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies:Array<any> = [];

  constructor(
    private movieService:MovieService
  ) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

}
