import { Component, OnInit } from '@angular/core';
import {ShopService} from "./shop.service";
import {Shop} from "./shop";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shopID: string;
  toggleShop: boolean;
  shopService: ShopService;
  shopsInfo: Shop[];

  constructor(shopService: ShopService) {
    this.shopID = undefined;
    this.toggleShop = false;
    this.shopService = shopService;
    this.shopsInfo = undefined;
  }

  ngOnInit(): void {
  }

  toggleCard(cardId): void {
      this.toggleShop = !this.toggleShop;
  }

  setShopInfo(theShop: Shop): void {
    this.shopsInfo = [theShop];
  }




  onLookup(): void {
    this.shopService.getShops(this.shopID)
      .subscribe((data) => this.setShopInfo(data));
  }

}
