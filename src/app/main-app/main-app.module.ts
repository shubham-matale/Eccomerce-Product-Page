import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppRoutingModule } from './main-app-routing.module';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainAppRoutingModule,
    SharedModule
  ],
})
export class MainAppModule { }
