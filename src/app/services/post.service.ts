import { Injectable } from "@angular/core";

Injectable({
  providedIn: 'root',
})
export class PostService {
  postList = [
    { id: 1, content: 'Post 1' },
    { id: 2, content: 'Post 2' },
    { id: 3, content: 'Post 3' },
    { id: 4, content: 'Post 4' },
    { id: 5, content: 'Post 5' },
    { id: 6, content: 'Post 6' },
  ]
}