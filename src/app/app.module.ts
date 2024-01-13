import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { UserAuthComponent } from './user-auth/components/user-auth/user-auth.component';
import { TestsContainerComponent } from './tests/containers/tests-container/tests-container.component';
import { PassingTestComponent } from './tests/components/passing-test/passing-test.component';
import { TestCardComponent } from './tests/containers/test-card/test-card.component';
import { BlogsContainerComponent } from './blogs/containers/blogs-container/blogs-container.component';
import { LocalizationComponent } from './main/localization/localization.component';
import { BeginnerContainerComponent } from './beginners/containers/beginner-container/beginner-container.component';
import { MainPageModule } from './main/containers/main-page/main-page.module';
import { MainRoutesComponent } from './navigation/components/main-routes/main-routes.component';
import { DotnetCertificationComponent } from './blogs/components/dotnet-certification/dotnet-certification.component';
import { ContactsContainerComponent } from './main/containers/contacts-container/contacts-container.component';
import { FirstComponent } from './training/first/first.component';
import { SecondComponent } from './training/second/second.component';
import { ThirdComponent } from './training/third/third.component';
import { FourthComponent } from './training/fourth/fourth.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAuthComponent,

    TestsContainerComponent,
    TestCardComponent,
    PassingTestComponent,
    BlogsContainerComponent,
    LocalizationComponent,
    BeginnerContainerComponent,
    MainRoutesComponent,
    BlogsContainerComponent,
    DotnetCertificationComponent,
    ContactsContainerComponent,

    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    MatBadgeModule,
    FormsModule,
    MatIconModule,

    MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
