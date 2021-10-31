import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { ProgressDialogComponent } from './progress-dialog/progress-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatRadioModule } from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';


import { MatStepperModule } from '@angular/material/stepper';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DontationDialogComponent } from './dontation-dialog/dontation-dialog.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { RouterModule } from "@angular/router";
import { MatSidenavModule } from '@angular/material/sidenav';
import { routing } from "./app.routing";
import { ProjectCardPageComponent } from './project-card-page/project-card-page.component';
import { PayoutPageComponent } from './payout-page/payout-page.component';
// import { CreateProjectComponent } from './create-project/create-project.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    ProgressDialogComponent,
    DontationDialogComponent,
    ProjectDetailsComponent,
    ProjectCardPageComponent,
    PayoutPageComponent,
    // CreateProjectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatProgressBarModule,
    MatRadioModule,
    MatStepperModule,
    RouterModule,
    MatSidenavModule,
    // MatFormFieldModule,
    // FormsModule,
    // ReactiveFormsModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
