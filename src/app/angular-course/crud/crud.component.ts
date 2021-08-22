import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from "rxjs/operators";

import { Post } from './post.model';
import { PostService } from './post-service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  @ViewChild("postForm") postForm: NgForm;

  isLoading = false;
  posts: Post[] = [];

  constructor(private http: HttpClient, private postService: PostService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  onCreatePost() {
    // console.log(this.postForm.value);
    const postData = this.postForm.value as Post;

    this.postService.createPost(postData.title, postData.content)
      .subscribe(() => {
        this.fetchPosts();
      });

    this.postForm.reset();
  }

  fetchPosts() {
    this.isLoading = true;

    this.postService.fetchPosts()
      .subscribe(posts => {
        this.isLoading = false;
        this.posts = posts;
      });
  }

  onClearPosts() {
    this.postService.deletePosts()
      .subscribe(() => {
        this.posts = [];
      });
  }

}
