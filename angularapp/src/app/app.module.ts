import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AComponent } from './pages/a/a.component';
import { BComponent } from './pages/b/b.component';
@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
