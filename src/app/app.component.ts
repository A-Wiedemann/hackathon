import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProgressDialogComponent} from "./progress-dialog/progress-dialog.component";
import { Project } from './project-card/project-card.component';




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

  projects: Project[] = [
    {
      msfCoins: 1,
      projectName: "Haiti",
      country: "lbutler0@latimes.com",
      description: "In Haiti wird das Benzin knapp - mit drastischen Folgen für die Gesundheitsversorgung. Auch die Sicherheitslage ist weiterhin sehr angespannt.",
      header: "Haiti: Ärzte ohne Grenzen besorgt über eingeschränkte Gesundheitsversorgung",
      image: "MSB106202.webp",
    },
    {
      msfCoins: 4,
      projectName: "Sea Rescue",
      country: "Mediterranean Sea",
      description: "In fünf Rettungsaktionen binnen zwei Tagen haben Teams von Ärzte ohne Grenzen an Bord der Geo Barents 367 Menschen aus Seenot im Mittelmeer gerettet.",
      header: "172 Kinder und Minderjährige aus Seenot gerettet",
      image: "MSB107687.webp",
    },
    {
      msfCoins: 3,
      projectName: "Climate Protection",
      country: "Global",
      description: "Nicht zuletzt die verheerenden Folgen der Überschwemmungen im nordrhein-westfälischen Ahrtal zeigen, dass die Klimakrise auch längst in Deutschland angekommen ist.",
      header: "Klimaschutz ist Gesundheitsschutz",
      image: "MSB65222.webp",
    },
  ];



  ngOnInit() {
  }
}
