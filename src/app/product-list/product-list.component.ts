import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from "../services/product.service"

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
    products: Product[] = [];
    selectedProduct!: Product;
    constructor(private productService: ProductService) {}

    //ngOnInit is called after the constructor
    ngOnInit(): void {
      this.getProducts();
    }

    onSelect(product: Product): void {
        this.selectedProduct = product;
    }
    // GET DATA FROM SERVICE
    getProducts(): void {
      this.products = this.productService.getProducts();
  }
}
