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
      stock: 6000,
      quantity: 0,
    },
    {
      artist: "Roger Waters",
      place: "Buenos Aires",
      date: "25/10/2026",
      time: "20:00",
      available: false,
      stock: 0,
      quantity: 0,
    },
    {
      artist: "Paul McCartney",
      place: "Buenos Aires",
      date: "23/12/2026",
      time: "21:00",
      available: true,
      stock: 4500,
      quantity: 0,
    }
  ];

  decrementarCantidad(concert: Concert) {
    if (concert.quantity > 0) {
      concert.quantity--;
    }
  }
  incrementarCantidad(concert: Concert) {
    if (concert.quantity < concert.stock && concert.stock > 0) {
      concert.quantity++;
    }
  }
  onChangeQuantity(event: Event, concert: Concert): void {
    console.log(event);
  }
  constructor () {

  }
}
