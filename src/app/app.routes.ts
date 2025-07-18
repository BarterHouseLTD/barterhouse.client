import {Routes} from '@angular/router';

import {appRoutes} from '@barterhouse/constants';
import {HomePageComponent} from '@barterhouse/pages/home-page';
import {AccountPageComponent} from '@barterhouse/pages/account-page';
import {LoginComponent} from '@barterhouse/pages/account-page/components/login/login.component';
import {NotFoundPageComponent} from '@barterhouse/pages/not-found-page';
import {ContactUsPageComponent} from '@barterhouse/pages/contact-us-page';
import {ProductListPageComponent} from '@barterhouse/pages/product-list-page';
import {ProductDetailsPageComponent} from '@barterhouse/pages/product-details-page';

export const routes: Routes = [
  {
    path: appRoutes.home,
    component: HomePageComponent,
  },
  {
    path: appRoutes.productList,
    component: ProductListPageComponent,
  },
  {
    path: appRoutes.productDetail + '/:id',
    component: ProductDetailsPageComponent,
  },
  {
    path: appRoutes.contactUs,
    component: ContactUsPageComponent,
  },
  {
    path: appRoutes.account,
    component: AccountPageComponent,
    children: [
      {
        path: appRoutes.login,
        component: LoginComponent
      }
    ]
  },
  {
    path: appRoutes.notFound,
    component: NotFoundPageComponent,
  },
];
