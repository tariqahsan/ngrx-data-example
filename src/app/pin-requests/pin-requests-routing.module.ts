import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinRequestsComponent } from './pin-requests.component';

const routes: Routes = [
  {
    path: '',
    component: PinRequestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PinRequestsRoutingModule { }
