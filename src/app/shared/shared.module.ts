import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FacebookComponent } from './facebook/facebook.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopifyComponent } from './shopify/shopify.component';


@NgModule({
  declarations: [
    FacebookComponent,
    DashboardComponent,
    ShopifyComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
