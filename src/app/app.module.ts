import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestsComponent } from './components/tests/tests.component';
import { UserSignInComponent } from './components/user-sign-in/user-sign-in.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { PassingTestComponent } from './components/passing-test/passing-test.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    UserSignInComponent,
    UserRegistrationComponent,
    PassingTestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
