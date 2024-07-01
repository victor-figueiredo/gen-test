import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostsListComponent } from "./features/posts/list/list.component";
import { getPost } from "./shared/resolvers/get-post.resolver";
import { EditPostComponent } from "./features/posts/edit/edit.component";
import { WelcomePageComponent } from "./features/welcome-page/welcome-page.component";
import { ThanksPageComponent } from "./features/thanks-page/thanks-page.component";

const routes: Routes = [
  { path: "post-list", component: PostsListComponent },
  {
    path: "edit-post/:id",
    resolve: { post: getPost },
    component: EditPostComponent,
  },
  {
    path: "welcome-page",
    component: WelcomePageComponent,
  },
  {
    path: "thanks-page",
    component: ThanksPageComponent,
  },
  { path: "", redirectTo: "welcome-page", pathMatch: "full" },
  { path: "**", redirectTo: "welcome-page", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
