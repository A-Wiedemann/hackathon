import {ProgressDialogComponent} from "../progress-dialog/progress-dialog.component";

import {MatDialog} from "@angular/material/dialog";
import {DontationDialogComponent} from "../dontation-dialog/dontation-dialog.component";
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


export interface Project {
  msfCoins: number;
  projectName: string;
  country: string;
  description: string;
  header: string;
  image: string;
}

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  donated = false;

  @Output() projectDetailsEvent = new EventEmitter<string>();

  constructor(
    private dialog: MatDialog,
  ) { }

  @Input() project: Project;
  private projectName: any;


  ngOnInit(): void {
  }

  openProgressDialog() {
    let dialogRef = this.dialog.open(ProgressDialogComponent, {
      //width: '1000px',
      //height: '600px',
      data: {name: name}
      //data: { name: this.name, animal: this.animal }
    });


    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  openProjectDetails() {
    this.projectDetailsEvent.emit("yes");
  }

  openDonationDialog(projectName: string) {

    this.donated = true;

    let dialogRef = this.dialog.open(DontationDialogComponent, {
      //width: '1000px',
      //height: '600px',
      data: {name: projectName}
      //data: { name: this.name, animal: this.animal }
    });


    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
    });
  }

}
