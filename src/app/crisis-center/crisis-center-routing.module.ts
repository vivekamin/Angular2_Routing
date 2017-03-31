import { NgModule }              from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center.component';


const crisisCenterRoutes : Routes = [
  {
    path : 'crisis-center' , component : CrisisCenterComponent
  }
]

@NgModule({
  imports: [ RouterModule.forChild(crisisCenterRoutes) ],
  exports: [ RouterModule ],
  providers: []
})
export class CrisisCenterRoutingModule { }
