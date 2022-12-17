import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Composite } from './composite';
import { CompositeRsp } from "./composite";
import { Observable } from 'rxjs';;


@Injectable({
  providedIn: 'root'
})
export class CompositeService {

  customers: Composite[];
  customerServiceUrl: string;

  constructor(private http: HttpClient) {
    this.customers = undefined;
  }

  getCustomerServiceUrl(): string {
    const theUrl = window.location.href;
    let result: string;

    // This is some seriously bad code.
    // If you do this on a job interview, you did not learn this in my class.
    if (theUrl.includes('amazonaws')) {
      /* This can change over time */
      result = 'http://34.203.227.98:5011/api/customer/';
    }
    else {
      result = 'http://34.203.227.98:5011/api/customer/';
    }
    return result;
  }
  /** GET heroes from the server */
  getCustomers(customerID): Observable<Composite> {
    let theUrl: string;

    theUrl = this.getCustomerServiceUrl() + customerID;
    return this.http.get<Composite>(theUrl);
  }


}
