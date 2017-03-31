import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HeroListComponent }     from './hero-list.component';
import { HeroDetailComponent }   from './hero-detail.component';
import { DummyComponent }        from './hero.dummy-component';
import { PageNotFoundComponent } from '../not-found.component'


const heroesRoutes: Routes = [
  { path: 'heroes',  component: HeroListComponent },

  { path: 'hero/:id', component: HeroDetailComponent ,
    children : [
                { path: 'dummy' , component: DummyComponent },
              
     ]
  },

];


@NgModule({
  imports : [ RouterModule.forChild(heroesRoutes) ],
  exports : [ RouterModule ]
})

export class HeroRoutingModule {

}
