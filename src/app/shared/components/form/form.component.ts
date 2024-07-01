import { Component, EventEmitter, input, Output } from "@angular/core";
import { Post } from "../../interfaces/post.interface";
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDividerModule } from "@angular/material/divider";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.css",
})
export class FormComponent {
  post = input<Post | null>();
  @Output() done = new EventEmitter<Post>();

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl<string>(this.post()?.title ?? "", {
        nonNullable: true,
        validators: Validators.required,
      }),
    });
  }

  revertChanges() {}

  onSubmit() {
    const post = this.form.value as Post;
    this.done.emit(post);
  }
}
