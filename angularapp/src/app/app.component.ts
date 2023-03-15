import { Component, OnInit } from '@angular/core';
import { defer, distinct, filter, find, first, from, fromEvent, interval, last, map, of, range, single, skip, skipUntil, skipWhile, take, takeWhile, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapp';

  constructor() { }

  ngOnInit(): void {

    const names=from([
      {name:"Ahmet",surname:"Yıldırım",email:"ahmet@gmail.com"},
      {name:"Mehmet",surname:"Şükran",email:"mehmet@gmail.com"},
      {name:"Hasan",surname:"Yılmaz",email:"hasan@gmail.com"},
  ])

    names.pipe(map(x=>`${x.name} ${x.surname} ${x.email}`)).subscribe(x=>{
      console.log(x)
    })
  }

}






