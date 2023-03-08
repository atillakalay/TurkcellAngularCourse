import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { HelperService } from './services/helper.service';
import { Helper2Service } from './services/helper2.service';
import { backend_url } from './consts';

let isProd: boolean = false


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HelperService, useClass: isProd ? HelperService : Helper2Service }, { provide: backend_url, useValue: 'http://www.api.com' }]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
