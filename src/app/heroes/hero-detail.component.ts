import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { slideInDownAnimation }           from '../animation';

import { Hero, HeroService }              from './hero.service';
@Component({
  template: `
  <h2>HEROES</h2>
  <div *ngIf="hero">
    <h3>"{{ hero.name }}"</h3>
    <div>
      <label>Id: </label>{{ hero.id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoHeroes()">Back</button>
    </p>

    <a routerLink="dummy" routerLinkActive="active">HeroesDummy</a>
  </div>
  <router-outlet></router-outlet>
  `,
  animations: [ slideInDownAnimation ]
})
export class HeroDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  hero : Hero ;
  name1 = "n";
  name2 = "n";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) {}
  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getHero(+params['id']))
      .subscribe(
        (hero: Hero) => {
          if(!hero)
          {
            console.log("No hero found");
            this.router.navigate(['/sidekicks']);


          }
          else
          {
            //console.log(this.hero === hero);
            this.hero = hero;
            console.log(this.hero === hero);
            //console.log(this.name1 === this.name2);
            //this.name2 = "1";
            //console.log(this.name1 === this.name2);
          }

        },
        (error) => {
          console.log("Error");
        }
    );
  }
  gotoHeroes() {
    let heroId = this.hero ? this.hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }
}
