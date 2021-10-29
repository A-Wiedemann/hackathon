import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-progress-dialog',
  templateUrl: './progress-dialog.component.html',
  styleUrls: ['./progress-dialog.component.css']
})
export class ProgressDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProgressDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }


  onDoneClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.dialogRef.close();

  }
    /*
    if(this.data.id){
      this.userService.delete(this.data.id).pipe(first()).subscribe(
        deleted => {
          console.log("Deleted User");
        },
        error => {
          console.log("Error deleting: " + error);
        });
    }else{
      this.spotterService.delete(this.data.name).pipe(first()).subscribe(
        deleted => {
          console.log("Deleted Spotter");

        },
        error => {
          console.log("Error deleting: " + error);
        });
    }

     */

}
