import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { PageServiceService } from './page-service.service';
import { PagePipePipe } from './page-pipe.pipe';



@NgModule({
  declarations: [FirstPageComponent, SecondPageComponent, PagePipePipe],
  imports: [
    CommonModule
  ],
  exports: [FirstPageComponent, SecondPageComponent, PagePipePipe],
  providers: [PageServiceService]
})
export class PageModule { }
