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
import { ProjectDetailsComponent } from './project-details/project-details.component';
import {RouterModule} from "@angular/router";
import { MatSidenavModule } from '@angular/material/sidenav';
import {routing} from "./app.routing";
import { ProjectCardPageComponent } from './project-card-page/project-card-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    ProgressDialogComponent,
    DontationDialogComponent,
    ProjectDetailsComponent,
    ProjectCardPageComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatStepperModule,
        RouterModule,
        MatSidenavModule,
      routing,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
