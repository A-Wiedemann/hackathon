import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProgressDialogComponent} from "./progress-dialog/progress-dialog.component";
import { Project } from './project-card/project-card.component';
import {Router} from "@angular/router";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hackathon';




  constructor(
    private router: Router
  ) {
  }






  ngOnInit() {
  }
}
