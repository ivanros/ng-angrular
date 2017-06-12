import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'ANGRULAR!';
  public totalMinions: number = 20;
  private minion: any = {
    name: <string> 'Bob',
    numberOfEyes: <number> 1,
    isFriendly: <boolean> true
  };
}
