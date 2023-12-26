import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { ITest } from '../models/ITest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerConnectionService {
  private testsUrl: string = "http://localhost:5016/api";
  httpOptions = {
    headers: new HttpHeaders({"Accept": "application/json", "Content-Type": "application/json"})
  };

  token: string = "";

  constructor(private client: HttpClient) { }


  getTests(): Observable<ITest[]>{
    this.httpOptions.headers = new HttpHeaders({"Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + this.token});
    return this.client.get<ITest[]>(this.testsUrl + "/tests", this.httpOptions);
  }
  postTestResultWithId(id: number, result: number): Observable<ITest> {
    this.httpOptions.headers = new HttpHeaders({"Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + this.token});
    return this.client.post<ITest>(this.testsUrl + "/tests/" + id, JSON.stringify({result: result}), this.httpOptions);
  }

  userSignIn(email : string, password: string): Observable<string> {
    this.httpOptions.headers = new HttpHeaders({"Accept": "application/json", "Content-Type": "application/json"});
    return this.client.post<string>(this.testsUrl + "/user/signin", {firstName: null, lastName: null, email: email, password: password});
  }
  userRegister(firstName: string, lastName: string, email : string, password: string): Observable<string> {
    this.httpOptions.headers = new HttpHeaders({"Accept": "application/json", "Content-Type": "application/json"});
    return this.client.post<string>(this.testsUrl + "/user/signup", {firstName: firstName, lastName: lastName, email: email, password: password});
  }

  logOut(){
    this.token = "";
  }

}
