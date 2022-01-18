import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
//import { User } from 'src/app/shared/User';
import { UserService } from 'src/app/shared/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { UserComponent } from '../user/user.component';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { User } from '../users.model';

/**
 * @title Table retrieving data through HTTP
 */
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

// export class UserListComponent implements AfterViewInit {
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'middleName', 'lastName', 'phone', 'email', 'actions'];
  dataSource = new MatTableDataSource<User>();

  data: User[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // constructor(private _httpClient: HttpClient, public service: UserService, private dialog: MatDialog,) {
  // }
  
  allUser$: Observable<User[]>;
  userService: EntityCollectionService<User>;

  constructor(entityCollectionServiceFactory:EntityCollectionServiceFactory, private dialog: MatDialog) { 
    this.userService = entityCollectionServiceFactory.create<User>("User");
    this.allUser$ = this.userService.entities$;
  }

  ngOnInit() {
    this.userService.getAll().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  onCreate() {
    this.userService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    this.dialog.open(UserComponent, dialogConfig);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}