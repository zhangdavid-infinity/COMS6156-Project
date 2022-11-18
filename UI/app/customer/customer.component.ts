import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CustomerService} from "./customer.service";
import {Customer} from "./customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerID: string;
  toggleCustomer: boolean;
  customerService: CustomerService;
  customersInfo: Customer[];

  constructor(customerService: CustomerService) {
    this.customerID = undefined;
    this.toggleCustomer = false;
    this.customerService = customerService;
    this.customersInfo = undefined;
  }

  ngOnInit(): void {
  }

  toggleCard(cardId): void {
      this.toggleCustomer = !this.toggleCustomer;
  }

  setCostomerInfo(theCustomer: Customer): void {
    this.customersInfo = [theCustomer];
  }




  onLookup(): void {
    this.customerService.getCustomers(this.customerID)
      .subscribe((data) => this.setCostomerInfo(data));
  }
}
