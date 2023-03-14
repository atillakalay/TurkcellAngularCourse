import { Component, OnInit } from '@angular/core';
import { defer, from, fromEvent, interval, of, range, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapp';

  constructor() { }

  ngOnInit(): void {

    const map = new Map()
    map.set(1, "Kitap1")
    map.set(2, "Kitap2")
    map.set(3, "Kitap3")
    map.set(4, "Kitap4")
    map.set(5, "Kitap5")


    let ofObservable = from(map)

    ofObservable.subscribe({
      next: (val) => console.log(`From: ${val}`),
      error: (e) => console.log(e),
      complete: () => console.log("Tamamlandı.")
    })
  }
}






