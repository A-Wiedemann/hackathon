import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProgressDialogComponent} from "./progress-dialog/progress-dialog.component";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hackathon';


  showDetails = false;

  constructor(
  ) {
  }

  openProjectDetails() {
    this.showDetails = true;
  }

  projects = ([
    {
      "msfCoins": 1,
      "projectName": "Laura",
      "country": "lbutler0@latimes.com",
      "description": "In Haiti wird das Benzin knapp - mit drastischen Folgen für die Gesundheitsversorgung. Auch die Sicherheitslage ist weiterhin sehr angespannt.",
      "header": "Haiti: Ärzte ohne Grenzen besorgt über eingeschränkte Gesundheitsversorgung",
    },

    {
      "msfCoins": 1,
      "projectName": "Laura",
      "country": "lbutler0@latimes.com",
      "description": "In Haiti wird das Benzin knapp - mit drastischen Folgen für die Gesundheitsversorgung. Auch die Sicherheitslage ist weiterhin sehr angespannt.",
      "header": "Haiti: Ärzte ohne Grenzen besorgt über eingeschränkte Gesundheitsversorgung",
    }
  ]);



  ngOnInit() {
  }
}
