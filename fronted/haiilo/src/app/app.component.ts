import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import * as _ from 'lodash';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';


interface ProductQuantity {
  productId: number;
  productName?: string;
  productQuantity: number;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClient]
})
export class AppComponent{
  title = 'haiilo';
  data: any;
  products: ProductQuantity[]= [];
  productsAvailable = [
    { productId: 1, productName: 'Apple' },
    { productId: 2, productName: 'Banana' },
    { productId: 3, productName: 'Kiwi' },
    { productId: 4, productName: 'Peach' }
  ];
  selectedProduct: any = null;
  productQuantity: number = 0;
  selectedProductsList: ProductQuantity[] = []; // List of selected products

  constructor(private appService: AppService) {}

  getTotal() {
    this.products = this.selectedProductsList.map(prod=> {
return {
  productId:prod.productId,
  productQuantity:prod.productQuantity
}
    })
    this.appService.getTotal(this.products).subscribe(
      data => {
        this.data = data;
      }
    );
  }
  addProductToList() {
    if (this.selectedProduct && this.productQuantity > 0) {
      this.selectedProductsList.push({
        productId: this.selectedProduct.productId,
        productName: this.selectedProduct.productName,
        productQuantity: this.productQuantity
      });
      this.selectedProduct = null;
      this.productQuantity = 1;
    }
  }

  removeProduct(index: number) {
    this.selectedProductsList.splice(index, 1);
  }


}
