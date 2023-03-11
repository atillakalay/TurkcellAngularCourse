import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PageModule } from './pages/page.module';
import { AdminModule } from './adminPages/admin.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule,
    AdminModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
