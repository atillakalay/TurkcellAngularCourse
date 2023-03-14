import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapp';




  constructor() { }

  ngOnInit(): void {
    let values= of('angular',2,[1,2,3],5.56)

    values.subscribe(x=>{
      console.log(x)
    })
  }




}

