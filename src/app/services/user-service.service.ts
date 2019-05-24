import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModelResponse } from '../models/user-model-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  public getAllUsers(page: number): Observable<UserModelResponse> {
    return this.httpClient.get<UserModelResponse>("https://reqres.in/api/users?page=" + page)
  }

  public getUserDetail(id: string): Observable<any> {
    if (id == null) throw "you must send id parameter";
    return this.httpClient.get("https://reqres.in/api/users/" + id)
  }
}
