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
  @Input() quantity!: number;
  @Input() max!: number;
   decrementarCantidad() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
  incrementarCantidad() {
    if (this.quantity < this.max && this.max > 0) {
      this.quantity++;
    }
  }
  onChangeQuantity(event: Event): void {
    console.log(event);
  }
 }
