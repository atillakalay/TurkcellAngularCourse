import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  postList:Post[]=[]
  title = 'angularapp';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe(x => {
      this.postList = x
    })
  }

}






