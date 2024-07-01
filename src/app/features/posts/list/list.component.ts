import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { PostsService } from "src/app/api/posts.service";
import { EditDialogService } from "../services/edit-dialog.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class PostsListComponent {
  private readonly router = inject(Router);
  private readonly postsSvc = inject(PostsService);
  private readonly dialog = inject(EditDialogService);
  posts = this.postsSvc.posts;

  edit(id: number) {
    this.router.navigate(["edit-post", id]);
  }

  openEditDialog(itemData: any) {
    this.dialog.openDialog();
  }
}
