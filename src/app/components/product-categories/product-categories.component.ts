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

  products: any;
  categories: any;

  combobox_value='';
  productos_filtrados: any;
  categorias_filtradas:any;

  edit: boolean = false;
  data: any;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
    //this.getCategoriesAggregate();

  }

  leer(){
    this.combobox_value=this.products.categories;
    console.log(this.combobox_value)
  }
  getProductsByCategory(){
    this.leer()
    this.productService.getProductsByCategory(this.combobox_value)
      .subscribe(
        res => {
          this.products = res;

          console.log(res);
        },   //console.log(res),               //{this.products = res;},
        err => console.log(err)
      )
  }
  /*login_btnClick(){
    console.log('FUNCIONA');
    this.productos_filtrados = this.products/*.filter( (products:any) =>
      //products.categories==this.combobox_value
      
    );
    this.categorias_filtradas = this.categories.filter((categories:any)=>
      categories._id==this.combobox_value
    );
        
    console.log(this.categories);
    //console.log(this.productos_filtrados);
  }*/

  getCategoriesAggregate() {
    this.categoryService.getCategoriesAggregate()
      .subscribe(
        res => {
          this.categories = res;

          console.log(res);
        },   //console.log(res),               //{this.products = res;},
        err => console.log(err)
      )
  }

  getCategories() {
    this.categoryService.getCategories()
      .subscribe(
        res => {
          this.categories = res;

          console.log(res);
        },   //console.log(res),               //{this.products = res;},
        err => console.log(err)
      )
  }

  getProducts() {
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