import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  constructor(private helperService: HelperService, private meta: Meta) {

  }

  ngOnInit(): void {
    console.log(this.helperService.upper("Angular (Second)"))
    this.meta.addTag({ name: "author", content: "Atilla Kalay" })
    this.meta.addTag({ name: "editor", content: "Atilla Kalay" })
  }

  show() {
    console.log(this.helperService.title = "Title is B")
  }


}
