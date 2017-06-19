import { Injectable } from '@angular/core';
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
  addMinion(minions: any[], newMinion: any): any[] {
    minions.push(newMinion);
    return minions;
  }

}
