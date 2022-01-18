import { Injectable, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Department } from './Department';
import { Observable, throwError } from 'rxjs';
//import { retry, catchError } from 'rxjs/operators';
import { map, tap } from "rxjs/operators";

// Define API
const apiURL = 'http://localhost:8686/api/v1/departments';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService implements OnInit {

  private dbPath = '/departments';
  departments: Department[] | undefined;
  selected: any;
  users$: Observable<any> | undefined;


  // Constructor for both Firebase and HttpClient
  constructor(private _http: HttpClient) { }

  getAll(): Observable<Department[]> {
    return this._http.get<Department[]>(apiURL);
  }

  ngOnInit() {
    this.users$ = this._http
      .get('https://randomuser.me/api?page=1&results=5&seed=abc')
      .pipe(
        map((data: any) => data.results),
        tap(data => (this.selected = data[0]))
      );
  }

}
function retry(arg0: number): import("rxjs").OperatorFunction<any, unknown> {
  throw new Error('Function not implemented.');
}

