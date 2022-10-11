import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } 
from './components/product-list/product-list.component';
import { ProductFormComponent } 
from './components/product-form/product-form.component';
import { ProductCategoriesComponent } 
from './components/product-categories/product-categories.component';

const routes: Routes = [
  {
    path:'',
    component:ProductListComponent
  },
  {
    path:'product',
    component:ProductListComponent
  },
  {
    path:'product/create',
    component:ProductFormComponent
  },
  {
    path:'product/edit/:id',
    component:ProductFormComponent
  },
  {
    path:'product/categories',
    component:ProductCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
