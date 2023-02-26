import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  name: string = "Atilla";
  isUser: boolean = true;
  createdDate: Date = new Date();
  names: string[] = ["Atilla", "Salih", "Veysel"]
  isUsers: boolean[] = [true, false, true]
  type: any = 5.65;
  type1: unknown[] = ["Ahmet", 5, true, new Date()]


  Method1() {
    this.type.toFixed();
  }

}
