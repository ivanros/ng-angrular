import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-content-alerts',
  templateUrl: './content-alerts.component.html',
  styleUrls: ['./content-alerts.component.css']
})
export class ContentAlertsComponent implements OnChanges {

  @Input() data: any;
  @Output() updatePersist = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      console.log('Data updated successfully!');
    }
  }

  persist() {
    this.updatePersist.emit({ message: 'Data persisted!' });
  }

}
