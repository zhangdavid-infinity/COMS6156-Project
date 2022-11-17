import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './customer';
import { CustomerRsp } from "./customer";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Customer[];
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
      result = undefined;
    }
    else {
      result = 'http://127.0.0.1:5011/api/customers/';
    }
    return result;
  }
  /** GET heroes from the server */
  getCustomers(customerID): Observable<Customer> {
    let theUrl: string;

    theUrl = this.getCustomerServiceUrl() + customerID;
    return this.http.get<Customer>(theUrl);
  }
  }

}
