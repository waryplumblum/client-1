import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/Category';
import { ProductFormComponent } from '../components/product-form/product-form.component';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/category`);
  }
  getCategory(id: string): Observable<Category>{
    return this.http.get<Category>(`${this.BASE_URL}/category/${id}`);
  }
  /*
     getCategory(categoryID: string): Promise<Category> {
  
     createCategory(createCategoryDTO: CreateCategoryDTO): Promise<Category> {
    }
  
  deleteCategory(){
  
    }
  
  updateCategory(categoryID: string,createCategoryDTO: CreateCategoryDTO): Promise<Category>{
        const updateCategory = await this.categoryModel.findByIdAndUpdate(categoryID, createCategoryDTO, {new:true});
        return updateCategory;
    }
  
  
   */
}
