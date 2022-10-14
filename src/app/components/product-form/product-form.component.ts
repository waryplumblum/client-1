import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/interfaces/Category';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories: Category[] = [];


  product: Product = {
    name: '',
    description: '',
    price: 0,
    imageURL: '',
    categories: ''
  };

 /* public Categories = [
    { id: '63460c4e0eb31b8eb014d153', categories: 'Telefonos' },
    { id: '63461eaca247297ff4aa3865', categories: 'Computadores' }
  ];*/

  edit: boolean = false;
  data: any;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService ,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params) {
      this.productService.getProduct(params['id'])
        .subscribe(
          res => {
            console.log(res);
            this.product = res;
            this.edit = true;
          }
        )
    }
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

  submitProduct() {
    this.productService.createProduct(this.product)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
        },
        err => console.log(err)
      )
  }

  updateProduct() {
    delete this.product.createdAt;
    this.productService.updateProduct(this.product._id ?? '', this.product)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/product'])
        },
        err => console.log(err)
      )
  }

}
