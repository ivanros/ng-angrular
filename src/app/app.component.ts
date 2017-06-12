import { Component } from '@angular/core';
import { Minion } from './commons/classes/minion.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'ANGRULAR!';
  private totalMinions: number = 3;
  private minions = [
    new Minion(0, 'Bob', 1, true),
    new Minion(1, 'Stuart', 2, true),
    new Minion(2, 'Kevin', 2, true)
  ];

  constructor() { }

}
