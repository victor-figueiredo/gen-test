import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Post } from "src/app/shared/interfaces/post.interface";
import { PostsService } from "src/app/shared/services/posts.service";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
})
export class EditPostComponent {
  post: Post = inject(ActivatedRoute).snapshot.data["post"];
  router = inject(Router);
  postsService = inject(PostsService);

  onSubmit(post: Post) {
    this.postsService.update(post);
    this.router.navigateByUrl("/post-list");
  }
}
