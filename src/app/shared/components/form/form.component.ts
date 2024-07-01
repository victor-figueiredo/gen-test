import { Component, EventEmitter, input, Output } from "@angular/core";
import { Post } from "../../interfaces/post.interface";
import { FormControl, FormGroup, Validators } from "@angular/forms";

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
      id: new FormControl<number>(this.post()?.id ?? 0, {
        nonNullable: true,
        validators: Validators.required,
      }),
      title: new FormControl<string>(this.post()?.title ?? "", {
        nonNullable: true,
        validators: Validators.required,
      }),
      body: new FormControl<string>(this.post()?.body ?? "", {
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
