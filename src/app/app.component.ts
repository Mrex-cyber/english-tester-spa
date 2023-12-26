import { Component } from '@angular/core';
import { UserIdentityService } from './services/user-identity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'TESTER SPA';
  public signingStateSignIn: boolean = true;
  public languages = [
    { code: 'en-US', label: 'English' },
    { code: 'ua', label: 'Українська' },
    { code: 'ru', label: 'Русский' }
  ]

  public changeStateInParent(value: boolean){
    this.signingStateSignIn = value;
  }

}
