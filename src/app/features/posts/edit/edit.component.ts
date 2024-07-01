import { Component, inject } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Post } from "src/app/shared/interfaces/post.interface";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
})
export class EditPostComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
    console.log("post");
    console.log(this.post);
  }
  post: Post = inject(ActivatedRoute).snapshot.data["post"];

  //  Alters (only locally) data recieved from given URL (that is coming through EditPostComponent)
  onSubmit(post: Post) {
    // CHAMAR UM MÉTODO NO SERVICE PARA ALTERAR O POST NO ARRAY DE POST
    this.router.navigateByUrl("/post-list");
  }
}
