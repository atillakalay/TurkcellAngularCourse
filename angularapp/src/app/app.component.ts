import { Component, OnInit } from '@angular/core';
import { concat, concatMap, defer, delay, distinct, filter, find, first, from, fromEvent, interval, last, map, mapTo, mergeMap, of, range, single, skip, skipUntil, skipWhile, switchMap, take, takeWhile, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapp';

  constructor() { }

  ngOnInit(): void {



    const myClick = fromEvent(document, 'click')
    myClick.pipe(switchMap(() => timer(3000))).subscribe(x => {
      console.log(x)
    })




    const click = fromEvent(document, 'click')
    click.pipe(mapTo("Merhaba")).subscribe(x => { console.log(x) })

    const names = from([
      { name: "Ahmet", surname: "Yıldırım", email: "ahmet@gmail.com" },
      { name: "Mehmet", surname: "Şükran", email: "mehmet@gmail.com" },
      { name: "Hasan", surname: "Yılmaz", email: "hasan@gmail.com" },
    ])

    var stringArray = of("a", "b", "b", "c", "d")
    var numberArray = of(1, 2, 3, 4, 5)

    stringArray.pipe(concatMap(x => numberArray.pipe(delay(3000),map(y => x + y)))).subscribe(x => {
      console.log(x)
    })

    names.pipe(mapTo("Sabit Değer")).subscribe(x => {
      console.log(x)
    })
  }

}






