import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "../components/blocks/home/home.component";
import {AppModule} from "../app.module";
import {MainTopComponent} from "../components/blocks/main-top/main-top.component";
import {MainHeaderComponent} from "../components/blocks/main-header/main-header.component";
import {CategoriesComponent} from "../components/blocks/categories/categories.component";
import {BoxAddProductsComponent} from "../components/blocks/box-add-products/box-add-products.component";
import {TopSearchComponent} from "../components/blocks/top-search/top-search.component";
import {ProductsComponent} from "../components/blocks/products/products.component";
import {BlogComponent} from "../components/blocks/blog/blog.component";
import {FooterComponent} from "../components/blocks/footer/footer.component";
import {GalleryComponent} from "../components/pages/gallery/gallery.component";
import {WishListComponent} from "../components/pages/wish-list/wish-list.component";
import {AboutComponent} from "../components/blocks/about/about.component";
import {ListProductComponent} from "../components/pages/products/list-product/list-product.component";
import {DetailProductComponent} from "../components/pages/products/detail-product/detail-product.component";
import {ProfileComponent} from "../components/pages/users/profile/profile.component";
import {ContactUsComponent} from "../components/blocks/contact-us/contact-us.component";
import {CheckoutComponent} from "../components/blocks/checkout/checkout.component";
import {CartComponent} from "../components/pages/cart/cart.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: '',
    component: HomeComponent
  }, {
    path: 'gallery',
    component: GalleryComponent
  }, {
    path: 'wish-list',
    component: WishListComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'products',
    component: ListProductComponent
  }, {
    path: 'detail-product',
    component: DetailProductComponent
  }, {
    path: 'profile',
    component: ProfileComponent
  }, {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];


@NgModule({
  declarations: [
    HomeComponent,
    MainTopComponent,
    MainHeaderComponent,
    CategoriesComponent,
    BoxAddProductsComponent,
    TopSearchComponent,
    ProductsComponent,
    BlogComponent,
    FooterComponent,
    GalleryComponent,
    WishListComponent,
    AboutComponent,
    ListProductComponent,
    DetailProductComponent,
    ProfileComponent,
    ContactUsComponent,
    CheckoutComponent,
    CartComponent,
  ],
  exports: [
    MainTopComponent,
    MainHeaderComponent,
    TopSearchComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class LayoutModule {
}
