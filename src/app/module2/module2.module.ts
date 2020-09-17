import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { Module2Component } from './module2.component';
// import { Cmp1Component } from './cmp1/cmp1.component';
import { Cmp2Component } from './cmp2/cmp2.component';
import { Cmp1Component } from './cmp1/cmp1.component';


@NgModule({
  declarations: [Module2Component,  Cmp2Component, Cmp1Component],
  imports: [
    CommonModule,
    Module2RoutingModule
  ]
})
export class Module2Module { }
