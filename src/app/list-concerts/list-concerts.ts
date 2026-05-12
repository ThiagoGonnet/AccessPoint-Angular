import { Component } from '@angular/core';
import { Concert } from '../interfaces/Concert';

@Component({
  selector: 'app-list-concerts',
  standalone: false,
  templateUrl: './list-concerts.html',
  styleUrl: './list-concerts.scss',
})
export class ListConcerts {

  concerts: Concert[] = [
    {
      artist: "Divididos",
      place: "Tandil",
      date: "25/5/2026",
      time: "21:00",
      available: true,
    },
    {
      artist: "Roger Waters",
      place: "Buenos Aires",
      date: "25/10/2026",
      time: "20:00",
      available: false,
    },
    {
      artist: "Paul McCartney",
      place: "Buenos Aires",
      date: "23/12/2026",
      time: "21:00",
      available: true,
    }
  ];
  constructor () {

  }
}
