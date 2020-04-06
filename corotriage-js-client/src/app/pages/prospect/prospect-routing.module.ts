import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProspectComponent} from './component/prospect.component';


const routes: Routes = [
  {
    path: '',
    component: ProspectComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProspectRoutingModule { }
