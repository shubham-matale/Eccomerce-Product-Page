import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppRoutingModule } from './main-app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SubNavBarComponent } from './sub-nav-bar/sub-nav-bar.component'
import { MainAppComponent } from './main-app.component';

@NgModule({
  declarations: [MainAppComponent,SubNavBarComponent],
  imports: [
    CommonModule,
    MainAppRoutingModule,
    SharedModule
  ],
  exports:[MainAppComponent]
})
export class MainAppModule { }
