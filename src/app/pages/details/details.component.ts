import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movie: Movie = {
    id: 0,
    name: '',
    image: '',
    rating: 0,
    adult: false,
    post: '',
    desc: ''
  };;

  constructor(
    private activeRoute: ActivatedRoute,
    private movieService: MovieServiceService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.activeRoute.params.subscribe((params: Params) => {
      this.movie.id = params['id'];
    });

    this.movieService.getMovie(this.movie.id).subscribe(movie => {
      this.movie = {
        id: movie.id,
        name: movie.name,
        image: movie.image,
        rating: movie.rating,
        adult: movie.adult,
        post: movie.post,
        desc: movie.desc
      }
    });

    setTimeout(() => {
      this.spinner.hide();
    }, 1500);
  }

}
