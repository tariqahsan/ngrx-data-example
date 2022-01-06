import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PinRequestsRoutingModule } from './pin-requests-routing.module';
import { PinRequestsComponent } from './pin-requests.component';

import { EntityDataService, EntityDefinitionService } from '@ngrx/data';

import { PinRequestsMetadata  } from './pin-requests-metadata';
import { FormsModule } from '@angular/forms';
import { PinRequestsDataService } from './pin-requests-data.service';

@NgModule({
  declarations: [
    PinRequestsComponent
  ],
  imports: [
    CommonModule,
    PinRequestsRoutingModule
  ]
})
export class PinRequestsModule { 
  constructor(
    entityDefinitionService: EntityDefinitionService,
    entitydataService: EntityDataService,
    pinRequestsDataService:PinRequestsDataService
  ) {
    entityDefinitionService.registerMetadataMap(PinRequestsMetadata);
    entitydataService.registerService('PinRequest', pinRequestsDataService);
  }
}
