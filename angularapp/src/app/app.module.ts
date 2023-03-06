import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
