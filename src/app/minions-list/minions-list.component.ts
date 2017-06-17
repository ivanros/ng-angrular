import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MinionsListService } from './services/minions-list.service';
import { Minion } from '../commons/classes/minion.class';

@Component({
  selector: 'app-minions-list',
  templateUrl: './minions-list.component.html',
  styleUrls: ['./minions-list.component.css']
})
export class MinionsListComponent implements OnInit {

  private isLoading = false;
  private minions;
  private newMinions = [];
  private minionsData = {
    count: 0
  };
  private minionFilters = {
    name: '',
    gender: undefined,
    numberOfEyes: undefined,
    isFriendly: true
  };
  private successMessage;

  constructor(private parentRoute: Router,
              private minionsListService: MinionsListService) { }

  ngOnInit() {
    this.searchMinions();
  }

  searchMinions() {
    this.isLoading = true;
    this.minionsListService.getMinions()
      .subscribe(data => {
        this.minionsData.count = data.totalElements;
        this.minions = data.elements;
        this.isLoading = false;
      });
  }

  addNewMinion() {
    const newMinion = new Minion(
      this.minions.length + 1,
      this.minionFilters.name ? this.minionFilters.name : 'Rob',
      this.minionFilters.gender ? this.minionFilters.gender : 'Male',
      this.minionFilters.numberOfEyes ? this.minionFilters.numberOfEyes : 2,
      'minion-empty.png',
      this.minionFilters.isFriendly
    );
    this.minions = this.minionsListService.addMinion(this.minions, newMinion);
    this.newMinions.push(newMinion.name);
    this.minionsData.count += 1;
  }

  goToMinionDetail(minion) {
    this.minionsListService.setCurrentMinion(minion);
    this.parentRoute.navigate(['/employees/' + minion.id]);
  }

  triggerUpdate(data) {
    this.successMessage = data.message;
  }

}
