import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { ProgressDialogComponent } from './progress-dialog/progress-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";

import {MatStepperModule} from '@angular/material/stepper';

import { MatButtonModule } from '@angular/material/button';
import { DontationDialogComponent } from './dontation-dialog/dontation-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    ProgressDialogComponent,
    DontationDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
