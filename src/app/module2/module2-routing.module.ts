import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module2Component } from './module2.component';
import { Cmp1Component } from './cmp1/cmp1.component'
import{ Cmp2Component } from './cmp2/cmp2.component'

const routes: Routes = [
  { path: '', component: Module2Component },
  {path : 'cmp1', component : Cmp1Component},
  {path : 'cmp2', component : Cmp2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
