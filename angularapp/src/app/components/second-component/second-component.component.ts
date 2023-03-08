import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  constructor(private helperService: HelperService) {

  }

  ngOnInit(): void {
    console.log(this.helperService.upper("Angular (Second)"))

  }


}
