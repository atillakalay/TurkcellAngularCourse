import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  constructor(private helperService: HelperService, private title: Title) { }

  ngOnInit(): void {
    console.log(this.helperService.upper("Angular (first)"))
    console.log(this.title.setTitle("Angular First Component"))
  }

  change() {
    console.log(this.helperService.title = "Component A title")
  }
}
