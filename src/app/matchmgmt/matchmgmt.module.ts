import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchmgmtRoutingModule } from './matchmgmt-routing.module';
import { MatchmgtListComponent } from './matchmgt-list/matchmgt-list.component';
import { MatchmgtDetailComponent } from './matchmgt-detail/matchmgt-detail.component';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { MatchmgmtMetadata } from './matchmgmt-metadata';
import { MatchmgmtDataService } from './matchmgmt-data.service';


@NgModule({
  declarations: [
    MatchmgtListComponent,
    MatchmgtDetailComponent
  ],
  imports: [
    CommonModule,
    MatchmgmtRoutingModule
  ]
})
export class MatchmgmtModule { 
  constructor(
    entityDefinitionService: EntityDefinitionService,
    entitydataService: EntityDataService,
    matchMgmtDataService: MatchmgmtDataService
  ) {
    entityDefinitionService.registerMetadataMap(MatchmgmtMetadata);
    entitydataService.registerService('DoeMetadata', matchMgmtDataService);
  }
}
