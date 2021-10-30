import { Component, OnInit } from '@angular/core';
import {Project} from "../project-card/project-card.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-project-card-page',
  templateUrl: './project-card-page.component.html',
  styleUrls: ['./project-card-page.component.css']
})
export class ProjectCardPageComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
  }

  projects: Project[] = [
    {
      msfCoins: 40000,
      projectName: "Fuel in Haiti",
      country: "Haiti",
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

}
