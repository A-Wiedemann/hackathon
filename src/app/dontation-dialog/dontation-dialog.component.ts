import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dontation-dialog',
  templateUrl: './dontation-dialog.component.html',
  styleUrls: ['./dontation-dialog.component.css']
})
export class DontationDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DontationDialogComponent>,
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

}
