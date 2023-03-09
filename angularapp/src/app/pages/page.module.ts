import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { PageServiceService } from './page-service.service';
import { PagePipePipe } from './page-pipe.pipe';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [FirstPageComponent, SecondPageComponent, PagePipePipe, HomePageComponent],
  imports: [
    CommonModule
  ],
  exports: [FirstPageComponent, SecondPageComponent, PagePipePipe],
  providers: [PageServiceService]
})
export class PageModule { }
