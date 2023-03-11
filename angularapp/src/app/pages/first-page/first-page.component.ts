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
    console.log("FirstPage Yüklendi")
   let page= this.activetedRoute.snapshot.queryParamMap.get('page')
   let pageSize= this.activetedRoute.snapshot.queryParamMap.get('pageSize')

   this.activetedRoute.queryParamMap.subscribe(x=>{
    console.log(`dynamicPage: ${x.get('page')} / pageSize: ${x.get('pageSize')}`)
   })

   console.log(`page: ${page} / pageSize: ${pageSize}`)
  }

  goSecondPage() {
    // this.route.navigateByUrl("/ikinci-sayfa")
    this.route.navigate(["/ikinci-sayfa",5])
  }

  changeQueryParams(){
    this.route.navigate(['birinci-sayfa'],{queryParams:{page:10,pageSize:20}})
  }

}
