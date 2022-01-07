import { Component, OnInit } from '@angular/core';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { DoeMetadata } from '../doe-metadata.model';
import { FormsModule } from '@angular/forms';

declare var window: any;

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

  myModal: any;
  doeMetadataForm: DoeMetadata = {
    doeId: '',
    authors: new Blob([''], {type: "text/plain"}),
    governmentContactEmail: '',
    governmentContactLastName: '',
    governmentContactPhone: '',
    performingOrgName: new Blob([''], {type: "text/plain"}),
    submitterEmailAddress: '',
    submitterLastName: '',
    submitterPhone: '',
    webPublicationDate: new Date(Date.now()),
    distributionAvailability: '',
    documentSubTypeDesc: new Blob([''], {type: "text/plain"}),
    documentTypeDesc: new Blob([''], {type: "text/plain"}),
    fundingOrgName: new Blob([''], {type: "text/plain"}),
    doi: '',
    title: '',
    journalTitle: ''
  };
  modalTitle: string = '';
  doeIdToDelete: string = '';
  deleteModal: any;

  ngOnInit(): void {
    this.doeMetadataService.getAll();
    this.myModal = new window.bootstrap.Modal(
      document.getElementById('productsModal'),
      {
        keyboard: false,
      }
    );
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal'),
      {
        keyboard: false,
      }
    )
  }

  openModal(doeId: string) {
    if (doeId == '') {
      this.modalTitle = 'Add Product';
      this.doeMetadataForm = {
        doeId: '',
        authors: new Blob([''], {type: "text/plain"}),
        governmentContactEmail: '',
        governmentContactLastName: '',
        governmentContactPhone: '',
        performingOrgName: new Blob([''], {type: "text/plain"}),
        submitterEmailAddress: '',
        submitterLastName: '',
        submitterPhone: '',
        webPublicationDate: new Date(Date.now()),
        distributionAvailability: '',
        documentSubTypeDesc: new Blob([''], {type: "text/plain"}),
        documentTypeDesc: new Blob([''], {type: "text/plain"}),
        fundingOrgName: new Blob([''], {type: "text/plain"}),
        doi: '',
        title: '',
        journalTitle: ''
      };
    } else {
      this.modalTitle = 'Update Product';
      this.doeMetadataService.entities$.subscribe((data) => {
        let filteredDoeMetadata = data.filter((_) => _.doeId == doeId)[0];
        this.doeMetadataForm = {...filteredDoeMetadata};
      });
    }
    this.myModal.show();
  }

  saveorupdate() {
    if (this.doeMetadataForm.doeId == '') {
      this.doeMetadataService
        .add(this.doeMetadataForm)
        .subscribe((_) => this.myModal.hide());
    } else {
      this.doeMetadataService
        .update(this.doeMetadataForm)
        .subscribe((_) => this.myModal.hide());
    }
  }

  openDeleteModal(doeId: string){
    this.doeIdToDelete = doeId;
    this.deleteModal.show();
  }
  delete(){
    this.doeMetadataService.delete(this.doeIdToDelete)
    .subscribe(_ => this.deleteModal.hide());
  }
}

