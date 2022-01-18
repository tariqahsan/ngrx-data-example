import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;
import { UserListComponent } from './user-list/user-list.component';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MaterialModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }
