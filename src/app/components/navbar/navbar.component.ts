import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  movies: Array<any> = [];
  search: string = '';

  constructor(
    private movieService: MovieServiceService,
  ) { }

  ngOnInit(): void {
  }
}
