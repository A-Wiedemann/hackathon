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

  constructor(
    private dialog: MatDialog,
              ) {
  }

  openDeleteDialog() {

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
}
