import { Component, OnInit } from '@angular/core';
import { Minion } from './commons/classes/minion.class';
import { MinionsListService } from './minions-list/services/minions-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'ANGRULAR!';

  public isLoading = false;
  private totalMinions = 0;
  private minions = [];

  constructor(private minionsListService: MinionsListService) { }

  ngOnInit() {
    this.searchMinions();
  }

  searchMinions() {
    this.isLoading = true;
    this.minionsListService.getMinions()
      .subscribe(data => {
        this.totalMinions = data.totalElements;
        this.minions = data.elements;
        this.isLoading = false;
      });
  }

  addNewMinion() {
    const newMinion = new Minion(
      this.minions.length + 1,
      'Rob',
      'Male',
      2,
      'minion-empty.png',
      true
    );
    this.minions = this.minionsListService.addMinion(this.minions, newMinion);
    this.totalMinions += 1;
  }

}
