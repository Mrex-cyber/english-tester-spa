import { Component, OnInit } from '@angular/core';
import { ServerConnectionService } from 'src/app/services/server-connection.service';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {

  constructor(private serverService: ServerConnectionService) { }

  userSignIn(email:string, password: string){
    this.serverService.userSignIn(email, password).subscribe(token => this.serverService.token = token);
  }
  logOut(){
    this.serverService.logOut();
  }

  ngOnInit() : void {
  }

}
