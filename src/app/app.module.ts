import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule , Routes } from '@angular/router';

import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';

//import { CrisisListComponent } from './crisis-list.component';
//import { HeroListComponent } from './hero-list.component';
import { PageNotFoundComponent } from './not-found.component';


@NgModule({
  declarations: [
    AppComponent,
  //  HeroListComponent,
  //  CrisisListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesModule,      //The router accepts the first route that matches a navigation request path.
    CrisisCenterModule,

    appRoutingModule,  //The order of route configuration matters.

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
