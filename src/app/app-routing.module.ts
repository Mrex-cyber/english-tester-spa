import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PassingTestComponent } from './components/passing-test/passing-test.component';

const routes: Routes = [
  { path: 'pass', component: PassingTestComponent },
  { path: '/', component: AppComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
