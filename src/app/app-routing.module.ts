import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditPostComponent } from "./features/post/list/list.component";
import { EditDialogComponent } from "./features/post/edit-dialog/edit-dialog.component";
import { DataScreenComponent } from "./features/post/edit/edit.component";
import { ThanksPageComponent } from "./features/thanks-page/thanks-page.component";
import { WelcomePageComponent } from "./features/welcome-page/welcome-page.component";

const routes: Routes = [
  { path: "post-list", component: EditPostComponent },
  { path: "edit-dialog", component: EditDialogComponent },
  { path: "edit-post", component: DataScreenComponent },
  { path: "welcome-page", component: WelcomePageComponent },
  { path: "thanks-page", component: ThanksPageComponent },
  { path: "", redirectTo: "welcome-page", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
