import { inject } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { PostsService } from "../services/posts.service";

export const getPost = (route: ActivatedRouteSnapshot) => {
  const postsService = inject(PostsService);
  return postsService.get(route.paramMap.get("id") as string);
};
