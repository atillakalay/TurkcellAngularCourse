import { Component, OnInit } from '@angular/core';
import { interval, of, range, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapp';




  constructor() { }

  ngOnInit(): void {
    let values= range(1,10)


  values.subscribe({
    next:(val)=>console.log(val),
    error:(e)=>console.log(e),
    complete:()=>console.log("Tamamlandı.")
  })



  }


}

