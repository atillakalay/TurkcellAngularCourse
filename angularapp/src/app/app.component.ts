import { Component, OnInit } from '@angular/core';
import { defer, distinct, filter, find, first, from, fromEvent, interval, last, of, range, single, skip, skipUntil, skipWhile, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapp';

  constructor() { }

  ngOnInit(): void {

    const myArray=interval(1000)

    myArray.pipe(skipUntil(timer(5000))).subscribe(x=>{
      console.log(x)
    })
  }

}






