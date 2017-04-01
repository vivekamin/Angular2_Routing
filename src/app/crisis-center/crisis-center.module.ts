import { NgModule }                  from '@angular/core';
import { CommonModule }              from '@angular/common';
import { FormsModule }               from '@angular/forms';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

import { CrisisCenterComponent }     from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisListComponent }       from './crisis-list.component';
import { CrisisDetailComponent }     from './crisis-detail.component';

import { CrisisService }             from './crisis.service';
import { DialogService }             from '../dialog.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
    CrisisListComponent,
    CrisisDetailComponent
  ],
  providers: [ CrisisService, DialogService ]
})
export class CrisisCenterModule { }
