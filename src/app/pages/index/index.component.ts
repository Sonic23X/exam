import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  moviesPlaying: Movie[] = [];
  moviesRated: Movie[] = [];

  movies: Array<Movie> = [];
  search: string = '';

  constructor(
    private movieService: MovieServiceService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(value => {

      let playing: Array<any> = value.playing;
      playing.forEach(movie => {
        let movieInfo: Movie = {
          id: movie.id,
          name: movie.name,
          image: movie.image,
          rating: movie.rating,
          adult: false,
          post: '',
          desc: ''
        };
        this.moviesPlaying.push(movieInfo);
      });

      let rated: Array<any> = value.topRated;
      rated.forEach(movie => {
        let movieInfo: Movie = {
          id: movie.id,
          name: movie.name,
          image: movie.image,
          rating: movie.rating,
          adult: false,
          post: '',
          desc: ''
        };
        this.moviesRated.push(movieInfo);
      });
    });

    setTimeout(() => {
      this.spinner.hide();
    }, 1500);
  }

  getMoviesSearch(): void {
    this.movies = [];

    this.movieService.searchMovies(this.search).subscribe(response => {
      let moviesSearch = response.movies;
      moviesSearch.forEach((movie: Movie) => {
        let movieOption = {
          id: movie.id,
          name: movie.name,
          image: movie.image,
          rating: movie.rating,
          adult: false,
          post: '',
          desc: ''
        };
        this.movies.push(movieOption);
      });
    });

    console.log(this.movies);
  }

  clean(): void {
    this.movies = [];
  }

}
