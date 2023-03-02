import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  person1: person = { firstName: "Atilla", lastName: "Kalay", age: 23 }
  myDate: Date = new Date()

}
interface person {
  firstName: string
  lastName: string
  age: number
}
