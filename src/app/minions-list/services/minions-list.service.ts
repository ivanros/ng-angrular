import { Injectable } from '@angular/core';
import { Minion } from '../../commons/classes/minion.class';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class MinionsListService {

  constructor(private http: Http) { }

  /**
   * Gets all minions list from json
   * @returns {Observable<T>}
   */
  getMinions() {
    return this.http.get('/assets/jsons/minions-data.json')
      .map(res => res.json()).delay(2000);
  }

  /**
   * Adds a minion to the list of minions and returns it (simulating a service with Observable)
   * @param minions
   * @param newMinion
   * @returns {Array}
   */
  addMinion(minions, newMinion) {
    minions.push(
      new Minion(
        newMinion.id,
        newMinion.name ? newMinion.name : 'Rob',
        newMinion.gender ? newMinion.gender : 'Male',
        newMinion.numberOfEyes ? newMinion.numberOfEyes : 2,
        'minion-empty.png',
        newMinion.isFriendly
      )
    );
    return minions;
  }

}
