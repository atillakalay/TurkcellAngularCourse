import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent {

  constructor(private route: Router) {

  }

  goSecondPage() {
    // this.route.navigateByUrl("/ikinci-sayfa")
    //this.route.navigate(["/ikinci-sayfa"])
  }

}
