import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProductsCardsComponent } from './products-cards/products-cards.component';



@NgModule({
  declarations: [
    HomeComponent,
    PresentationComponent,
    ProductsCardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [HomeComponent]
})
export class HomeModule { }
