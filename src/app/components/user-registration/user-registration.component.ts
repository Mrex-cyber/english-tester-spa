import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServerConnectionService } from 'src/app/services/server-connection.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  @Output() changeState: EventEmitter<boolean> = new EventEmitter();

  constructor(private serverService: ServerConnectionService) { }

  userRegister(firstName: string, lastName: string, email: string, password: string){
    this.serverService.userRegister(firstName, lastName, email, password).subscribe();
  }

  changeToRegisterState(){
    this.changeState.emit(true);
  }

}
