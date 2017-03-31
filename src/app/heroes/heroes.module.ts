import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HeroRoutingModule } from './heroes-routing.module';

import { HeroListComponent }    from './hero-list.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { DummyComponent }    from './hero.dummy-component';
import { HeroService } from './hero.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    DummyComponent
  ],
  providers: [ HeroService ]
})
export class HeroesModule {}
