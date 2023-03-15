import { Component, OnInit } from '@angular/core';
import { defer, filter, find, first, from, fromEvent, interval, last, of, range, single, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapp';

  constructor() { }

  ngOnInit(): void {

    const myArray=from([5,7,9,10,12,14,20,33])

    myArray.pipe(single(x=>x>5)).subscribe(x=>{
      console.log(x)
    })
  }

}






