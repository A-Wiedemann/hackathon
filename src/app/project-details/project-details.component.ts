import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor() { }

  public donated: number;
  public donatedPercentage: number;
  public goal: number;

  ngOnInit(): void {
    this.donated = 40000;
    this.goal = 100000;

    this.donatedPercentage = this.donated / 1000;
  }

}
