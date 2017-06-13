import { Component, OnInit } from '@angular/core';
import { Minion } from './commons/classes/minion.class';
import { MinionsListService } from './minions-list/services/minions-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'ANGRULAR';

  private isLoading = false;
  private minions;
  private minionsData = {
    count: 0
  };
  private minionFilters = {
    name: '',
    gender: undefined,
    numberOfEyes: undefined,
    isFriendly: true
  };

  constructor(private minionsListService: MinionsListService) { }

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
    this.minions = this.minionsListService.addMinion(this.minions, this.minionFilters);
    this.minionsData.count += 1;
  }

}
