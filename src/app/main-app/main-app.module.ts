import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppRoutingModule } from './main-app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SubNavBarComponent } from './sub-nav-bar/sub-nav-bar.component'
import { MainAppComponent } from './main-app.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@NgModule({
  declarations: [MainAppComponent,SubNavBarComponent, ProductListingComponent],
  imports: [
    CommonModule,
    MainAppRoutingModule,
    SharedModule,
    BsDropdownModule.forRoot()
  ],
  exports:[MainAppComponent]
})
export class MainAppModule { }
