import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent {

  constructor(private route: Router,private activetedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
   let page= this.activetedRoute.snapshot.queryParamMap.get('page')
   let pageSize= this.activetedRoute.snapshot.queryParamMap.get('pageSize')

   console.log(`page: ${page} / pageSize: ${pageSize}`)
  }

  goSecondPage() {
    // this.route.navigateByUrl("/ikinci-sayfa")
    this.route.navigate(["/ikinci-sayfa",5])
  }

}
