import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserIdentityService {

  userIdentityAction = new EventEmitter<boolean>();
  constructor() { }

  updateUserIdentityAction(signIn: boolean){
    this.userIdentityAction.emit(signIn);
  }

}
