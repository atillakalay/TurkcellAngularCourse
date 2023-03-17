import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, mergeMap, skip, take, toArray } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceHolderService {
  constructor(private http: HttpClient) { }

  getPostList(page: number, pageSize: number) {


    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(mergeMap(x => from(x)), skip((page - 1) * pageSize), take(pageSize), toArray());
  }

  getPost(id: number) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
