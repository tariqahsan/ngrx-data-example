import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinRequestsModule } from './pin-requests/pin-requests.module';


// NOTE : loadChildren: () => import('./pin-requests/pin-requests.module').then(_ => _.PinRequestsModule)
const routes: Routes = [
  {
    path: 'matchmgmt',
    loadChildren: () => import('./matchmgmt/matchmgmt.module').then(_ => _.MatchmgmtModule)
  },
  {
    path: '',
    loadChildren: () => import('./pin-requests/pin-requests.module').then(_ => _.PinRequestsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
