import { Component, EventEmitter, Output } from '@angular/core';
import { ServerConnectionService } from 'src/app/services/server-connection.service';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent {
  @Output() changeState: EventEmitter<boolean> = new EventEmitter();

  constructor(private serverService: ServerConnectionService) { }

  userSignIn(email:string, password: string){
    this.serverService.userSignIn(email, password).subscribe(token => this.serverService.token = token);
  }

  changeToSigningInState(){
    this.changeState.emit(false);
  }

  logOut(){
    this.serverService.logOut();
  }

}
