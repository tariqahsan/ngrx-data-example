import { Component, OnInit } from '@angular/core';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { PinRequest } from './pin-request.model';

@Component({
  selector: 'app-pin-requests',
  templateUrl: './pin-requests.component.html',
  styleUrls: ['./pin-requests.component.css']
})
export class PinRequestsComponent implements OnInit {

  allPinRequest$ : Observable<PinRequest[]>;

  pinRequestService: EntityCollectionService<PinRequest>;
  constructor(entityCollectionServiceFactory:EntityCollectionServiceFactory) { 
    this.pinRequestService = entityCollectionServiceFactory.create<PinRequest>("PinRequest");
    this.allPinRequest$ = this.pinRequestService.entities$;
  }

  ngOnInit(): void {
    this.pinRequestService.getAll();
  }

}
