import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class GetDataService {
  constructor(private httpClient: HttpClient) {}

  apiUrl = environment.apiUrl;
  // usersUrl = '/users';

  getAll() {
    return this.httpClient.get(this.apiUrl + "/posts");
  }

  // getUsersData(){
  //   return this.httpClient.get(this.apiUrl + "/users");
  // }
}
