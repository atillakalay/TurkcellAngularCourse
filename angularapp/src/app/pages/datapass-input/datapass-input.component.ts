import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datapass-input',
  templateUrl: './datapass-input.component.html',
  styleUrls: ['./datapass-input.component.css']
})
export class DatapassInputComponent {

  @Input() name:string | undefined

}
