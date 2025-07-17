import {Routes} from '@angular/router';

import {appRoutes} from '@barterhouse/constants';
import {AccountPageComponent} from '@barterhouse/pages/account-page';
import {NotFoundPageComponent} from '@barterhouse/pages/not-found-page';
import {ProductListPageComponent} from '@barterhouse/pages/product-list-page';
import {ProductDetailsPageComponent} from '@barterhouse/pages/product-details-page';
import {LoginComponent} from '@barterhouse/pages/account-page/components/login/login.component';

export const routes: Routes = [
  {
    path: appRoutes.productList,
    component: ProductListPageComponent,
  },
  {
    path: appRoutes.productDetail + '/:id',
    component: ProductDetailsPageComponent,
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
