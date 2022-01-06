import { Component, OnInit } from '@angular/core';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { DoeMetadata } from '../doe-metadata.model';

@Component({
  selector: 'app-matchmgt-list',
  templateUrl: './matchmgt-list.component.html',
  styleUrls: ['./matchmgt-list.component.css']
})
export class MatchmgtListComponent implements OnInit {

  alldoeMetadata$: Observable<DoeMetadata[]>;

  doeMetadataService: EntityCollectionService<DoeMetadata>;
  constructor(entityCollectionServiceFactory:EntityCollectionServiceFactory) { 
    this.doeMetadataService = entityCollectionServiceFactory.create<DoeMetadata>("DoeMetadata");
    this.alldoeMetadata$ = this.doeMetadataService.entities$;
  }

  ngOnInit(): void {
    this.doeMetadataService.getAll();
  }

}
