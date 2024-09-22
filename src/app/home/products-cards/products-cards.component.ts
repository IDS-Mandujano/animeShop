import { Component, Input } from '@angular/core';
import { CardSerialization } from '../modelo/card-serialization';

@Component({
  selector: 'app-products-cards',
  templateUrl: './products-cards.component.html',
  styleUrls: ['./products-cards.component.css']
})
export class ProductsCardsComponent {
  @Input() producto!: CardSerialization;
}
