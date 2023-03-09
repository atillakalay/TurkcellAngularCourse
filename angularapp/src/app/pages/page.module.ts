import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';



@NgModule({
  declarations: [FirstPageComponent, SecondPageComponent],
  imports: [
    CommonModule
  ],
  exports: [FirstPageComponent, SecondPageComponent]
})
export class PageModule { }
