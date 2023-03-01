import { Component } from '@angular/core';
import { Product,Type } from 'src/app/models/product';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent {
  product: Product

  constructor(){
    this.product=new Product(1,"Kalem",Type.Big)
  }
}
