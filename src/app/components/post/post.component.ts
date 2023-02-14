import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  title = 'List of Posts';
  @Input() fromParent?: string;
  postParentMessage = 'Message coming from the post parent';
  childMessage = 'From Child Component';
  
  posts:any[] = []

  outputChildMessage = 'Message from child component via output';
  @Output() messageEvent = new EventEmitter<string>()

  constructor(private postService: PostService) {
    this.posts = postService.postList
  }
  
}
