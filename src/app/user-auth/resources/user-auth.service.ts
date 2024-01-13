import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUserCredentials } from '../models/IUserCredentials';
import { ITokenWithEmail } from '../models/ITokenWithEmail';

@Injectable({
  providedIn: 'root'
})
export class UserAuthResourceService {
  private testsUrl: string = "http://localhost:5016/api";

  public defaultAuthOptions: ITokenWithEmail = {token: '', email: ''};

  private httpOptions = {
    headers: new HttpHeaders({"Accept": "application/json", "Content-Type": "application/json"})
  };

  private _authOptions = new BehaviorSubject<ITokenWithEmail>(this.defaultAuthOptions);
  public authOptions$ = this._authOptions.asObservable();

  constructor(private client: HttpClient) { }

  public userSignIn(credentials: IUserCredentials): Observable<ITokenWithEmail> {
    this.httpOptions.headers = new HttpHeaders({"Accept": "application/json", "Content-Type": "application/json"});
    return this.client.post<ITokenWithEmail>(this.testsUrl + "/user/signin", {firstName: null, lastName: null, email: credentials.email, password: credentials.password});
  }

  public userRegister(credentials: IUserCredentials): Observable<string> {
    this.httpOptions.headers = new HttpHeaders({"Accept": "application/json", "Content-Type": "application/json"});
    return this.client.post<string>(this.testsUrl + "/user/signup", {firstName: credentials.firstName, lastName: credentials.lastName, email: credentials.email, password: credentials.password});
  }

  public logOut(){
    this._authOptions.next(this.defaultAuthOptions);

    location.reload();
  }

  public updateAuthOptions(newAuthOptions: ITokenWithEmail) {
    this._authOptions.next(newAuthOptions);
  }

}
