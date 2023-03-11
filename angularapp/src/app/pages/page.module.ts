import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [AboutComponent, ContactComponent, GalleryComponent, HomeComponent],
  imports: [
    CommonModule
  ],
  exports: [AboutComponent, ContactComponent, GalleryComponent, HomeComponent]
})
export class PageModule { }
