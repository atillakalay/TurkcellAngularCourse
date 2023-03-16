import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OrnekComponent } from './ornek/ornek.component';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    OrnekComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})


export class AppModule { }
