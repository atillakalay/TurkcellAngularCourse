import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, from, map, mergeMap, skip, take, toArray } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceHolderService {

  public currencyObservable = new BehaviorSubject("Türk Lirası")




  constructor(private http: HttpClient) { }

  create(createPost: Post) {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', createPost)
  }

  update(updatedPost:Post){
    return this.http.put<Post>(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`,updatedPost )
  }
  delete(deletedPost:Post){
    return this.http.delete<any>(`https://jsonplaceholder.typicode.com/posts/${deletedPost.id}` )
  }

  setCurrency(val: any) {
    this.currencyObservable.next(val)
  }

  getPostList(page: number, pageSize: number) {


    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(mergeMap(x => from(x)), skip((page - 1) * pageSize), take(pageSize), map(x => `${x.id} ${x.userId}`), toArray());
  }

  getPost(id: number) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

  getUserWithSearch(searchText: string) {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(mergeMap(x => from(x)), filter(x => x.name.toLowerCase().includes(searchText.toLowerCase())), map(x => `${x.name} - ${x.email}`), toArray())
  }

}
