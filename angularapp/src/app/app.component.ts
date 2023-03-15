import { Component, OnInit } from '@angular/core';
import { defer, distinct, filter, find, first, from, fromEvent, interval, last, of, range, single, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapp';

  constructor() { }

  ngOnInit(): void {

    const myArray=from([5,7,10,5])

    myArray.pipe(distinct()).subscribe(x=>{
      console.log(x)
    })
  }

}






