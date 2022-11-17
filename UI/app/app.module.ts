import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ColumbiaStudentComponent } from './columbia_student/columbia-student.component';

import { ReactiveFormsModule } from '@angular/forms';
import {PlayerComponent} from './player/player.component';
import { NavtestComponent } from './navtest/navtest.component';
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import { HomepageComponent } from './homepage/homepage.component';
import { CustomerComponent } from './customer/customer.component';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { AddressComponent } from './address/address.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ColumbiaStudentComponent,
    PlayerComponent,
    HomepageComponent,
    NavtestComponent,
    HomepageComponent,
    CustomerComponent,
    ShopComponent,
    ProductComponent,
    OrderComponent,
    AddressComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgbNavModule
    ],
  providers: [
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


