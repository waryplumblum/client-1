import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/Product';
import { ProductFormComponent } from '../components/product-form/product-form.component';
import { Category } from '../interfaces/Category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProductsByCategory(params?:any/*filters:Product*/): Observable<Product[]>{
    const options:any = { headers: this.headers };
    if(params){
      let paramsLocal = new HttpParams();
      Object.keys(params).forEach((k) => {
        if (params[k] instanceof Array) {
          params[k].forEach((item:any) => {
            paramsLocal = paramsLocal.append(`${k.toString()}[]`, item);
          });
        } else {
          paramsLocal = paramsLocal.append(k, params[k]);
        }
      });
      options['params'] = paramsLocal;
    }   
    return this.http.get<Product[]>(`${this.BASE_URL}/product/`,options/*filters*/) as any; 
  }///${filters}

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}/product`);
  }

  getProduct(id: string): Observable<Product>{
    return this.http.get<Product>(`${this.BASE_URL}/product/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.BASE_URL}/product/create`, product);
  }

  deleteProduct(id: string): Observable<Product> {
    console.log(id);
    return this.http.delete<Product>(`${this.BASE_URL}/product/delete?productID=${id}`);
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.BASE_URL}/product/update?productID=${id}`, product);
  }

}

