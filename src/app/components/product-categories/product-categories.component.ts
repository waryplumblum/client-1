import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interfaces/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css'],
})
export class ProductCategoriesComponent implements OnInit {
  products: any;
  categories: any;

  search: string = '';

 

  combobox_value = '';
  productos_filtrados: any;
  categorias_filtradas: any;

  edit: boolean = false;
  data: any;

  filters = {
    name:'',
    description:'',
    price:1,
    imageURL:'',
    categories:null
  }

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  getProductsByCategory() {
    this.productService.getProductsByCategory(this.filters).subscribe(
      (res) => {
        this.products = res;
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  filter(): void {
    this.productService.getProductsByCategory(this.filters).subscribe(
      (res) => {
        this.products = res;
        this.products = this.products.filter(
          (product: { description: string }) => {
            return (
              product.description
                .toLocaleLowerCase()
                .indexOf(this.search.toLocaleLowerCase()) > -1
            );
          }
        );
        console.log('length', this.products.length);
      },
      (err) => console.log(err)
    );
  }

  getArray() {
    console.table(this.products);
  }

  getCategoriesAggregate() {
    this.categoryService.getCategoriesAggregate().subscribe(
      (res) => {
        this.categories = res;
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      (res) => {
        this.categories = res;
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (res) => {
        this.products = res;
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
}
