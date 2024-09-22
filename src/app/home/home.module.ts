import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProductsCardsComponent } from './products-cards/products-cards.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    HomeComponent,
    PresentationComponent,
    ProductsCardsComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [HomeComponent]
})
export class HomeModule { }
