import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-minions-detail',
  templateUrl: './minions-detail.component.html',
  styleUrls: ['./minions-detail.component.css']
})
export class MinionsDetailComponent implements OnInit {

  private minionId;
  private minionData = {
    id: 11,
    name: 'Jon',
    gender: 'Male',
    numberOfEyes: 1,
    picture: 'minion11.png',
    isFriendly: true,
    status: 'Sleeping',
    skills: ['Destroy things', 'Shout'],
    vocabulary: ['Bello!', 'Ha ha ha! Banana!', 'Poopaye!', 'Para tu']
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.minionId = this.route.snapshot.params['employeeId'];
  }

}
