import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/pages/users/login/login.component';
import { RegisterComponent } from './components/pages/users/register/register.component';
import { MainTopComponent } from './components/blocks/main-top/main-top.component';
import { MainHeaderComponent } from './components/blocks/main-header/main-header.component';
import { CategoriesComponent } from './components/blocks/categories/categories.component';
import { BoxAddProductsComponent } from './components/blocks/box-add-products/box-add-products.component';
import { TopSearchComponent } from './components/blocks/top-search/top-search.component';
import { ProductsComponent } from './components/blocks/products/products.component';
import { BlogComponent } from './components/blocks/blog/blog.component';
import { FooterComponent } from './components/blocks/footer/footer.component';
import { HomeComponent } from './components/blocks/home/home.component';
import {LayoutModule} from "./modules/layout.module";
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { WishListComponent } from './components/pages/wish-list/wish-list.component';
import { AboutComponent } from './components/blocks/about/about.component';
import { DetailProductComponent } from './components/pages/products/detail-product/detail-product.component';
import { ProfileComponent } from './components/pages/users/profile/profile.component';
import { ContactUsComponent } from './components/blocks/contact-us/contact-us.component';
import { CheckoutComponent } from './components/blocks/checkout/checkout.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { AdminComponent } from './components/admin/admin.component';
import { AccountComponent } from './components/admin/accounts/account/account.component';
import { ListExpOrderComponent } from './components/admin/export-orders/list-exp-order/list-exp-order.component';
import { ListImpOrderComponent } from './components/admin/import-orders/list-imp-order/list-imp-order.component';
import { ListProductManageComponent } from './components/admin/products/list-product-manage/list-product-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
