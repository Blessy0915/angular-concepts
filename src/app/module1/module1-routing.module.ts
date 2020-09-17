import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module1Component } from './module1.component';

import { Cmp1Component } from './cmp1/cmp1.component'
import { Cmp2Component } from './cmp2/cmp2.component'

const routes: Routes = [
  
      {path : '', component : Module1Component},
      { path: '1', component: Cmp1Component },
      { path : '2', component: Cmp2Component}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }

