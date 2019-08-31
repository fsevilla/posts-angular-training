import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies() {
    return [
      {
        title: 'Pelicula 1'
      },
      {
        title: 'Pelicula 2'
      }
    ]
  }
}
