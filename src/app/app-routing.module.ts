import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { fakeUsers } from './model/authors.model';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  authorList = fakeUsers;
}
