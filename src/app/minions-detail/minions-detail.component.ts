import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MinionsListService } from '../minions-list/services/minions-list.service';

@Component({
  selector: 'app-minions-detail',
  templateUrl: './minions-detail.component.html',
  styleUrls: ['./minions-detail.component.css']
})
export class MinionsDetailComponent implements OnInit {

  private isLoading = false;
  private minionData = { };

  constructor(private route: ActivatedRoute,
              private minionsListService: MinionsListService) { }

  ngOnInit() {
    this.minionData = this.minionsListService.getCurrentMinion();

    if (!this.minionData) {
      this.getMinionsAndReassign();
    }
  }

  getMinionsAndReassign() {
    const minionId = +this.route.snapshot.params['employeeId'];
    this.isLoading = true;

    this.minionsListService.getMinions()
      .subscribe(data => {
        this.minionsListService.setCurrentMinion(data.elements);

        data.elements.forEach(minion => {
          if (minionId === minion.id) {
            this.minionData = minion;
            return false;
          }
        });

        this.isLoading = false;
      });
  }

}
