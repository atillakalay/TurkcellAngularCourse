import { Component, OnInit } from '@angular/core';
import { interval, of, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapp';




  constructor() { }

  ngOnInit(): void {
    let values= timer(2000,2000)


  values.subscribe({
    next:(val)=>console.log(val),
    error:(e)=>console.log(e),
    complete:()=>console.log("Tamamlandı.")
  })



  }


}

