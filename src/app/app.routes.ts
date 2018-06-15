import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyteamComponent } from './components/myteam/myteam.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SearchComponent } from "./components/search/search.component";

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'myteam', component: MyteamComponent },
  { path: 'stats', component: StatisticsComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
