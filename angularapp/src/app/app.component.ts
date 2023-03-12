import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapp';



  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    let myObserveble = new Observable<string>(data => {
      data.next("Atilla")
      data.next("Atilla")
      data.complete()
    })

    myObserveble.subscribe({
      next(data) { console.log(data) },
      error(err) { console.log(err) },
      complete() { console.log("Data yayınlama sona erdi") }

    })
  }


}

