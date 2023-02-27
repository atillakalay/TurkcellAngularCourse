import { Component } from '@angular/core';

@Component({
  selector: 'app-event-click',
  templateUrl: './event-click.component.html',
  styleUrls: ['./event-click.component.css']
})
export class EventClickComponent {

  count: number = 1

  public writeToConsole(): void {
    console.log("click")
  }

  public increaseCount(): void {
    this.count++
  }

}
