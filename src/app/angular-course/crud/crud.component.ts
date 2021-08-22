import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from "rxjs/operators";

class Post {
  constructor(public title: any, public content: any) { }
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  @ViewChild("postForm") postForm: NgForm;

  private apiUrl = "https://winngo-6c09e.firebaseio.com/posts.json";
  posts = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  onCreatePost() {
    // console.log(this.postForm.value);

    const postData = this.postForm.value;
    this.http.post(
      this.apiUrl, postData)
      .subscribe(Response => {
        console.log(Response);
      });

    this.postForm.reset();
  }

  private fetchPosts() {
    this.http.get(this.apiUrl)
      // .pipe(map(data => {
      //   const allPosts = [];
      //   for (const key in data) {
      //     if (data.hasOwnProperty(key)) {
      //       allPosts.push({...data[key], id: key})
      //     }
      //   }
      //   return allPosts;
      // }))
      .subscribe(response => {
        console.log(response);
        // this.posts = response;
      });
  }

}
