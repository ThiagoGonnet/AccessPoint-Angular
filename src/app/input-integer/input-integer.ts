import { Component, Input } from '@angular/core';
import { Concert } from '../interfaces/Concert';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss',
})
export class InputInteger {

  constructor () { }
  @Input() concert!: Concert;
   decrementarCantidad(concert: Concert) {
    if (this.concert.quantity > 0) {
      this.concert.quantity--;
    }
  }
  incrementarCantidad(concert: Concert) {
    if (this.concert.quantity < this.concert.stock && this.concert.stock > 0) {
      this.concert.quantity++;
    }
  }
  onChangeQuantity(event: Event, concert: Concert): void {
    console.log(event);
  }
 }
