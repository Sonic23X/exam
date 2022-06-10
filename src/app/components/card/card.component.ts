import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() movie: Movie = {
    id: 0,
    name: '',
    image: '',
    rating: 0,
    adult: false,
    post: '',
    desc: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
