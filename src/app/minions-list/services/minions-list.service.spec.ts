/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Http, HttpModule, ConnectionBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { MinionsListService } from './minions-list.service';

describe('MinionsListService', () => {

  const minionListExample = {
    totalElements: 2,
    elements: [{
      id: 1,
      name: 'Bob',
      numberOfEyes: 2
    }, {
      id: 2,
      name: 'Jerry',
      numberOfEyes: 1
    }]
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        Http,
        MinionsListService,
        { provide: ConnectionBackend, useClass: MockBackend }
      ]
    });
  });


  it('getMinions should call http GET and return minion list',
    inject([MinionsListService, ConnectionBackend], (service, backend) => {

    backend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(minionListExample)
      })));
    });

    service.getMinions()
      .subscribe((res) => {
        expect(res).toEqual(minionListExample);
      });
  }));


  it('addMinion should add input minion to given list',
    inject([MinionsListService], (service) => {
      const newMinion = {
        id: 3,
        name: 'Fredy',
        numberOfEyes: 1,
        isFriendly: true
      };

      expect(minionListExample.elements.length).toEqual(2);

      const result = service.addMinion(minionListExample.elements, newMinion);

      expect(result.length).toEqual(3);
      expect(result[ result.length - 1 ].name).toEqual(newMinion.name);
    }));


  it('setCurrentMinion should modify current minion successfully',
    inject([MinionsListService], (service) => {
      const minion = {
        id: 4,
        name: 'Paco',
        numberOfEyes: 2
      };

      let result = service.getCurrentMinion();

      expect(result).toBeUndefined();

      service.setCurrentMinion(minion);

      result = service.getCurrentMinion();

      expect(result).toEqual(minion);
    }));

});
