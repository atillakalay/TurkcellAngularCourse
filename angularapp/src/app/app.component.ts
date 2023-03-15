import { Component, OnInit } from '@angular/core';
import { defer, first, from, fromEvent, interval, of, range, timer } from 'rxjs';

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

    myArray.pipe(first(x=>x>15)).subscribe(x=>{
      console.log(x)
    })
  }

}






