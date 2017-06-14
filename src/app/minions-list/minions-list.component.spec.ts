/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { MinionsListComponent } from './minions-list.component';
import { SearchFiltersPipe } from '../commons/pipes/search-filters.pipe';

import { MinionsListService } from './services/minions-list.service';
import createSpy = jasmine.createSpy;

describe('MinionsListComponent', () => {
  let component: MinionsListComponent;
  let fixture: ComponentFixture<MinionsListComponent>;

  class DummyComponent { }

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

  let minionsService;
  const mockMinionsService = {
    getMinions: () => {
      return {
        subscribe: () => Observable.create()
      };
    },
    addMinion: () => { },
    getCurrentMinion: () => { },
    setCurrentMinion: () => { }
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MinionsListComponent,
        SearchFiltersPipe
      ],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([
          { path: '', component: DummyComponent }
        ])
      ],
      providers: [
        { provide: MinionsListService, useValue: mockMinionsService }
      ]
    })
    .compileComponents();

    minionsService = TestBed.get(MinionsListService);
    spyOn(minionsService, 'getMinions').and.returnValue(Observable.of(minionListExample));
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(MinionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create and execute ngOnInit method, calling minion list service', () => {
    expect(minionsService.getMinions).toHaveBeenCalled();

    expect(component.minions).toEqual(minionListExample.elements);
    expect(component.isLoading).toBeFalsy();
  });


  it('addNewMinion should call addMinion service method and increment minions count', () => {
    spyOn(minionsService, 'addMinion');

    component.minions = minionListExample;
    component.minionFilters = {
      name: 'New Minion',
      gender: 'Male',
      numberOfEyes: 2,
      isFriendly: true
    };
    component.minionsData = {
      count: 2
    };

    component.addNewMinion();

    expect(minionsService.addMinion).toHaveBeenCalled();
    expect(component.minionsData.count).toEqual(3);
  });


  it('goToMinionDetail should set selected minion and navigate to detail child component', () => {
    spyOn(minionsService, 'setCurrentMinion');

    const minion = minionListExample.elements[0];

    component.goToMinionDetail(minion);

    expect(minionsService.setCurrentMinion).toHaveBeenCalled();
  });

});
