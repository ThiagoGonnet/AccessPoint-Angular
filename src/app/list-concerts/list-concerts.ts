import { Component } from '@angular/core';

@Component({
  selector: 'app-list-concerts',
  standalone: false,
  templateUrl: './list-concerts.html',
  styleUrl: './list-concerts.scss',
})
export class ListConcerts {

  concert = {
    "artist": "Divididos",
    "place": "Tandil",
    "date": "25/5/2026",
    "time": "21:00",
    "available": "Si"
  }
  concert2 = {
    "artist": "Roger Waters",
    "place": "Buenos Aires",
    "date": "25/10/2026",
    "time": "20:00",
    "available": "Si"
  }
  concert3 = {
    "artist": "Paul McCartney",
    "place": "Buenos Aires",
    "date": "23/12/2026",
    "time": "21:00",
    "available": "Si"
  }
  constructor () {

  }
}
