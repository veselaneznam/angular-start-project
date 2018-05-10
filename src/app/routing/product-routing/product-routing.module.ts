import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductGuardService} from "../../products/product-guard.service";
import {ProductListComponent} from "../../products/product-list.component";
import {ProductDetailComponent} from "../../products/product-detail.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductGuardService],component: ProductDetailComponent },
    ]),
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
