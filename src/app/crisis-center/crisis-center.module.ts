import { NgModule }                  from '@angular/core';
import { CommonModule }              from '@angular/common';
import { FormsModule }               from '@angular/forms';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';


import { CrisisCenterComponent }  from './crisis-center.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule
  ],
  declarations: [ CrisisCenterComponent ],
  providers: []
})
export class CrisisCenterModule { }
