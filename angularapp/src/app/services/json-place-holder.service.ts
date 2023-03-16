import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceHolderService {
  postList:Post[]=[]

  constructor(private http:HttpClient) { }

  getPostList(){
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
