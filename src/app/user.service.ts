import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "./iuser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }

  fetchAll() {
    return this.http.get<IUser[]>(this.url);
  }

  fetchOne(id: any) {
    return this.http.get<IUser>(this.url+'/'+id);
  }

  addUser(user: IUser) {
    return this.http.post<IUser>(this.url, user);

  }
}
