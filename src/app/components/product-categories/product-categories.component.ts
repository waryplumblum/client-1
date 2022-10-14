import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interfaces/Product';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {

  products : any ;
  categories:any;

  edit: boolean = false;
  data: any;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
    ) { }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

getCategories(){
  this.categoryService.getCategories()
    .subscribe(
      res => {
        this.categories = res;
        
        console.log(res);
      },   //console.log(res),               //{this.products = res;},
      err => console.log(err)
    ) 
}

  getProducts(){
    this.productService.getProducts()
    .subscribe(
      res => {
        this.products = res;
        
        console.log(res);
      },   //console.log(res),               //{this.products = res;},
      err => console.log(err)
    ) 
  }
}