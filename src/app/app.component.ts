import { Component } from '@angular/core';
import { Minion } from './commons/classes/minion.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'ANGRULAR!';
  public totalMinions: number = 20;
  private minion: Minion = new Minion('Bob', 1, true);

  constructor() { }

}
