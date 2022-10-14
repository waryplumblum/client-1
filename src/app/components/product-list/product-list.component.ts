import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : any ;



  constructor(
    private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
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

    /*  _id?: string;
    name: string;
    description: string;
    price: number;
    imageURL: string;
    createdAt?: Date;
    categories: string;
  
  */

  deleteProduct(id: string) {
    this.productService.deleteProduct(id)
      .subscribe(
        res => {
          //console.log(res);
          this.getProducts();
        },
        err => console.log(err)
      )
  }

}
