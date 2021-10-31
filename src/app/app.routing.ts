import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {ProjectDetailsComponent} from "./project-details/project-details.component";
import {ProjectCardPageComponent} from "./project-card-page/project-card-page.component";
import { PayoutPageComponent } from "./payout-page/payout-page.component";
import { CreateProjectComponent } from "./create-project/create-project.component";

const appRoutes: Routes = [
  { path: '', component: ProjectCardPageComponent},
  //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'project', component: ProjectDetailsComponent},
  { path: 'payout', component: PayoutPageComponent },
  { path: 'create-project', component: CreateProjectComponent },
  ];


export const routing = RouterModule.forRoot(appRoutes,
  {onSameUrlNavigation: 'reload'}
);
