import { Component, Inject, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { backend_url } from 'src/app/consts';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  constructor(public helperService: HelperService, private title: Title, @Inject(backend_url) private url: string) { }

  ngOnInit(): void {
    console.log(this.helperService.upper("Angular (first)"))
    console.log(this.title.setTitle("Angular First Component"))
    this.helperService.sendSms("Merhabalar bu bir deneme mesajıdır.", "05050505050505")
    console.log(this.url)
  }

  change() {
    console.log(this.helperService.title = "Component A title")
  }
}
