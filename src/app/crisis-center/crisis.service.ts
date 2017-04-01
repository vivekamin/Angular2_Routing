import { Injectable } from '@angular/core';

export class Crisis {
  constructor(public id: number, public name: string) { }
}

const CRISES = [
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Sky Rains Great White Sharks'),
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];

let criesPromise = Promise.resolve(CRISES);
@Injectable()
export class CrisisService {
  getCrises() { return criesPromise; }
  getCrisis(id: number | string) {
    return criesPromise
      .then(crises => crises.find(crisis => crisis.id === +id));
  }
}
