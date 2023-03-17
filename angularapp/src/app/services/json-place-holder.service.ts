import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, from, map, mergeMap, skip, take, toArray } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceHolderService {
  constructor(private http: HttpClient) { }

  getPostList(page: number, pageSize: number) {


    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(mergeMap(x => from(x)), skip((page - 1) * pageSize), take(pageSize), map(x => `${x.id} ${x.userId}`), toArray());
  }

  getPost(id: number) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

  getUserWithSearch(searchText: string) {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(mergeMap(x => from(x)), filter(x => x.name.toLowerCase().include(searchText.toLowerCase())), map(x => x.name))
  }

}
