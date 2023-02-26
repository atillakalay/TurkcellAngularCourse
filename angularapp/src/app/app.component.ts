import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
}

class Product {
  //Fields
  name: string
  price: number
  category: string
  IsPublish: boolean

  //Constructor
  constructor(name: string, price: number, category: string, IsPublish: boolean) {
    this.name = name
    this.price = price
    this.category = category
    this.IsPublish = IsPublish
  }


  public Topla(x: number, y: number): number {
    return x + y
  }
}

class Product2 extends Product {

  constructor(name: string, price: number, category: string, IsPublish: boolean) {
    super(name, price, category, IsPublish)
  }

  public Method2() {
    var product = new Product2("Kalem1", 25, "Kalemler", false)
  }
}
