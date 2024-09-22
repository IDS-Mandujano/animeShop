import { Component, OnInit } from '@angular/core';
import { CardSerialization } from '../modelo/card-serialization';
import { PRODUCTOS } from '../../../data/sql';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  products : CardSerialization[] = []
  constructor (){}

  ngOnInit(): void {
      this.products = PRODUCTOS
  }

}
