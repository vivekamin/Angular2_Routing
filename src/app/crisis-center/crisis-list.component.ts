import { Component, OnInit } from '@angular/core';

@Component({

  template: `crisis-list.component.html
  <router-outlet></router-outlet>
  `,
})
export class CrisisListComponent implements OnInit {
  constructor() {  }

  ngOnInit() {}
}
