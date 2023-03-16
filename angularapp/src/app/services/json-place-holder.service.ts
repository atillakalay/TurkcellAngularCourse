import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceHolderService {
  constructor(private http: HttpClient) { }

  getPostList() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: number) {

    var queryParams=new HttpParams({
      fromString:'name=Atilla&age=23'
    })


    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
