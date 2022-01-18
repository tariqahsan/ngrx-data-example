import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { UserMetadata } from './users-metadata';
import { UserDataService } from './users-data.service';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserListComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule 
  ]
})
export class UserModule { 
  constructor(
    entityDefinitionService: EntityDefinitionService,
    entitydataService: EntityDataService,
    userDataService: UserDataService
  ) {
    entityDefinitionService.registerMetadataMap(UserMetadata);
    entitydataService.registerService('User', userDataService);
  }
}

