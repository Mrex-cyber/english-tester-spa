import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestsContainerComponent } from './tests/containers/tests-container/tests-container.component';
import { BeginnerContainerComponent } from './beginners/containers/beginner-container/beginner-container.component';
import { BlogsContainerComponent } from './blogs/containers/blogs-container/blogs-container.component';
import { MainPageComponent } from './main/containers/main-page/main-page.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'tests', component: TestsContainerComponent },
  { path: 'beginners', component: BeginnerContainerComponent },
  { path: 'blogs', component: BlogsContainerComponent },
  { path: '', component: MainPageComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
