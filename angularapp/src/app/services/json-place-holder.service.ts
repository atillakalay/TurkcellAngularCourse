import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
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
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(catchError(err=>{
      throw new Error("Data bulunamadı")
    }))
  }
}
