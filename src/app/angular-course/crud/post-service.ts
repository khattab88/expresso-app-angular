import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

import { Post } from "./post.model";

@Injectable({ providedIn: 'root' })
export class PostService {
    private apiUrl = "https://winngo-6c09e.firebaseio.com/posts.json";

    constructor(private http: HttpClient) { }

    createPost(title: string, content: string) {
        const post: Post = { title, content };

        this.http.post<Post>(this.apiUrl, post)
            .subscribe(Response => {
                console.log(Response);
        });
    }

    fetchPosts() {
        return this.http
            .get<{ [key: string]: Post }>(this.apiUrl)
            .pipe(
                map(data => {
                    const allPosts: Post[] = [];
                    for (const key in data) {
                        if (data.hasOwnProperty(key)) {
                            allPosts.push({ ...data[key], id: key })
                        }
                    }
                    return allPosts;
                })
            );
    }
}