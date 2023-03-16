import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user:any
  title = 'angularapp';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1').subscribe(x=>{
     this.user=x
    })
  }

}






