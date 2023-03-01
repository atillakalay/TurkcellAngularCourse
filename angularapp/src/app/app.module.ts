import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgforComponent } from './directive/ngfor/ngfor.component';
import { NgIfComponent } from './directive/ng-if/ng-if.component';
import { NgSwitchComponent } from './directive/ng-switch/ng-switch.component';
import { NgClassComponent } from './directive/ng-class/ng-class.component';
import { NgStyleComponent } from './directive/ng-style/ng-style.component';
import { NgModelComponent } from './directive/ng-model/ng-model.component';
import { CustomDirective } from './directives/custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgforComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgClassComponent,
    NgStyleComponent,
    NgModelComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
