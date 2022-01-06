import { HttpClient } from '@angular/common/http';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { PinRequest } from './pin-request.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PinRequestsDataService extends DefaultDataService<PinRequest> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('PinRequest', http, httpUrlGenerator);
  }

  //getAll(): Observable<PinRequest[]> {

    //return this.http.get('http://localhost:8686/api/v1/PinRequests/');
    
    //return this.http.get('https://localhost:44324/api/Products/').pipe(
  //     return this.http.get('http://localhost:9999/api/v1/Products/').pipe(
  //     map((data) => {
  //       if (!data) {
  //         return [];
  //       }
  //       return (data as PinRequest[]).map((d) => {
  //         return { ...d, price: 0 };
  //       });
  //     })
  //   );
  // }
//}
}

