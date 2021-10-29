import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProgressDialogComponent} from "./progress-dialog/progress-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hackathon';

  showDetails = false;

  constructor(
  ) {
  }

  openDeleteDialog() {
  }

  openProjectDetails() {
    this.showDetails = true;
  }
}
