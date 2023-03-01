import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {

  isLarge = true
  isRedBox = true
  isBorder = true



  applyCss() {
    this.isLarge = !this.isLarge
    this.isRedBox = !this.isRedBox
    this.isBorder = !this.isBorder
  }
}
