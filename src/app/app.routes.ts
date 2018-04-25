import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyteamComponent } from './components/myteam/myteam.component';
import { RankingComponent } from './components/ranking/ranking.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'myteam', component: MyteamComponent },
  { path: 'ranking', component: RankingComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });