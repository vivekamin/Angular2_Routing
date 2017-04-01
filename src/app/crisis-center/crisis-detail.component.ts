import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { slideInDownAnimation }   from '../animation';
import { Crisis, CrisisService }         from './crisis.service';
import { DialogService }  from '../dialog.service';
@Component({
  template: `
  <div *ngIf="crisis">
    <h3>"{{ editName }}"</h3>
    <div>
      <label>Id: </label>{{ crisis.id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="editName" placeholder="name"/>
    </div>
    <p>
      <button (click)="save()">Save</button>
      <button (click)="cancel()">Cancel</button>
    </p>
  </div>
  `,
  styles: ['input {width: 20em}'],
  animations: [ slideInDownAnimation ]
})
export class CrisisDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  crisis: Crisis;
  editName: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService,
    private service: CrisisService
  ) {}
  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getCrisis(+params['id']))
      .subscribe(
        (crisis: Crisis) => {
          if(!crisis)
          {
            console.log("No crisis found");
            this.router.navigate(['/sidekicks']);
          }
          else
            {
            this.crisis = crisis;
            this.editName = crisis.name;
            }

        },
        (error) => {
          console.log("Error");
        }
    );
  }
  cancel() {
    this.gotoCrises();
  }
  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }
  
  gotoCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }
}
