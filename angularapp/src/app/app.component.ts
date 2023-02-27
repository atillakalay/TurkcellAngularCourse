import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
}

interface Product {
  Name: string
  Price: Number
}

class car {

  kalem: Product = { Name: "Kalem1", Price: 250 }

  constructor(kalem: Product) {
    this.kalem = { Name: "Kalem1", Price: 250 }
  }
}
