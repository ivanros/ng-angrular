import { Component, OnInit } from '@angular/core';
import { Minion } from './commons/classes/minion.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'ANGRULAR!';

  private minions = [];

  constructor() { }

  ngOnInit() {
    this.searchMinions();
  }

  searchMinions() {
    this.minions = [
      new Minion(1, 'Bob', 1, 'minion01.png', true),
      new Minion(2, 'Stuart', 2, 'minion02.png', true),
      new Minion(3, 'Kevin', 2, 'minion03.png', true)
    ];
  }

  addNewMinion() {
    this.minions.push(
      new Minion(4, 'Tom', 1, 'minion04.png', true)
    );
  }

}
