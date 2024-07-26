import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { PRODUCTS } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = PRODUCTS;
    selectedProduct!: Product;
    constructor() {}
    ngOnInit(): void {}
    onSelect(product: Product): void {
        this.selectedProduct = product;
    }
}
