import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "src/environments/environment";
import { Post } from "../shared/interfaces/post.interface";
import { tap } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostsService {
  public posts = signal<Post[]>([]);
  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiUrl;

  constructor() {
    this.getAll();
  }

  getAll() {
    return this._http
      .get<Post[]>(this._endPoint + "/posts")
      .pipe(tap((posts: Post[]) => this.posts.set(posts)))
      .subscribe();
  }

  get(id: string) {
    return this._http.get<Post>(`${this._endPoint}/posts/${id}`);
  }
}
