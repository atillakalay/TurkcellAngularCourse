import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { concat, concatMap, defer, delay, distinct, filter, find, first, from, fromEvent, interval, last, map, mapTo, mergeMap, of, range, reduce, retry, single, skip, skipUntil, skipWhile, switchMap, take, takeWhile, tap, timer, toArray } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapp';

  constructor() { }

  ngOnInit(): void {

    ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(retry(3)).subscribe(x=>{
      console.log(x)
    })

  }

}






