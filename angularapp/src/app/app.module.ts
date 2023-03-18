import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { OrnekComponent } from './ornek/ornek.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AComponent } from './shared/a/a.component';
import { BComponent } from './shared/b/b.component';

@NgModule({
  declarations: [
    AppComponent,
    OrnekComponent,
    SearchComponent,
    AComponent,
    BComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
