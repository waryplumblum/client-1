import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {

  products: Product[] = [];

  product: Product = {
    name: '',
    description: '',
    price: 0,
    imageURL: '',
    categories: ''
  };

  public Categories = [
    { id: 0, categories: 'Telefonos' },
    { id: 1, categories: 'Computadores' }
  ];


  edit: boolean = false;
  data: any;

  constructor(
    private productService: ProductService) { }


  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(
        res => {
          this.products = res;
        },   //console.log(res),               //{this.products = res;},
        err => console.log(err)
      )
  }
}