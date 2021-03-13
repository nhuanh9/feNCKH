import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "../components/blocks/home/home.component";
import {GalleryComponent} from "../components/pages/gallery/gallery.component";
import {WishListComponent} from "../components/pages/wish-list/wish-list.component";
import {AboutComponent} from "../components/blocks/about/about.component";
import {ListProductComponent} from "../components/pages/products/list-product/list-product.component";
import {DetailProductComponent} from "../components/pages/products/detail-product/detail-product.component";
import {ProfileComponent} from "../components/pages/users/profile/profile.component";
import {ContactUsComponent} from "../components/blocks/contact-us/contact-us.component";
import {CheckoutComponent} from "../components/blocks/checkout/checkout.component";
import {CartComponent} from "../components/pages/cart/cart.component";
import {AccountComponent} from "../components/admin/accounts/account/account.component";
import {ListExpOrderComponent} from "../components/admin/export-orders/list-exp-order/list-exp-order.component";
import {ListImpOrderComponent} from "../components/admin/import-orders/list-imp-order/list-imp-order.component";
import {ListProductManageComponent} from "../components/admin/products/list-product-manage/list-product-manage.component";

const routes: Routes = [
  {
    path: 'accounts',
    component: AccountComponent
  },  {
    path: '',
    component: ListProductManageComponent
  },  {
    path: 'products',
    component: ListProductManageComponent
  }, {
    path: 'e-orders',
    component: ListExpOrderComponent
  }, {
    path: 'i-orders',
    component: ListImpOrderComponent
  }
];


@NgModule({
  declarations: [
    AccountComponent,
    ListProductManageComponent,
    ListExpOrderComponent,
    ListImpOrderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
