import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  constructor(private helperService: HelperService) { }

  ngOnInit(): void {
    console.log(this.helperService.upper("Angular (first)"))

  }
}
