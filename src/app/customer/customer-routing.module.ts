import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CanActivateGuard } from './guards/can-activate.guard';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      { path: 'orders', component: CustomerOrdersComponent },
      { path: 'details', component: CustomerDetailsComponent },
      {
        path: 'edit',
        component: CustomerEditComponent,
        canActivate: [CanActivateGuard],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanActivateGuard]
})
export class CustomerRoutingModule {
  static components = [CustomerComponent, CustomerOrdersComponent, CustomerDetailsComponent, CustomerEditComponent];
}

