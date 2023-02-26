import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  name = "Atilla";
  isUser = true;


  constructor() {
    //backtick
    console.log(`Name: ${this.name}`)
    console.log(`Is User: ${this.isUser}`)
  }

  public Method1() {
    let name2: string = "Atilla";
  }

}
