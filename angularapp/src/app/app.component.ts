import { Component, OnInit } from '@angular/core';
import { defer, distinct, filter, find, first, from, fromEvent, interval, last, of, range, single, skip, skipWhile, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapp';

  constructor() { }

  ngOnInit(): void {

    const myArray=from([1,2,3,4,5,6,7,8,9,10])

    myArray.pipe(skipWhile(x=>x<5)).subscribe(x=>{
      console.log(x)
    })
  }

}






