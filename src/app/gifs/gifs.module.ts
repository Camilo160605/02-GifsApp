import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent
  ],
  exports: [
    HomePageComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
