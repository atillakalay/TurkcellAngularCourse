import { Component, OnInit } from '@angular/core';
import { defer, fromEvent, interval, of, range, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapp';

  constructor() { }

  ngOnInit(): void {

    let ofObservable = of(new Date())

    let deferObservable = defer(() => of(new Date()))

    let timerObservable = timer(3000)

    timerObservable.subscribe(x => {
      ofObservable.subscribe({
        next: (val) => console.log(`of: ${val}`),
        error: (e) => console.log(e),
        complete: () => console.log("Tamamlandı.")
      })
    })

    timerObservable.subscribe(x => {
      deferObservable.subscribe({
        next: (val) => console.log(`defer: ${val}`),
        error: (e) => console.log(e),
        complete: () => console.log("Tamamlandı.")
      })
    })


  }


}




