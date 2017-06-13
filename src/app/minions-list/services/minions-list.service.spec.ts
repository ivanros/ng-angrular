/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MinionsListService } from './minions-list.service';

describe('MinionsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinionsListService]
    });
  });

  it('should ...', inject([MinionsListService], (service: MinionsListService) => {
    expect(service).toBeTruthy();
  }));
});
