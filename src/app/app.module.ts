import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { MyteamService } from './services/myteam.service';
import { StatisticsService } from './services/statistics.service';
import { PlayersService } from './services/players.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MyteamComponent } from './components/myteam/myteam.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        MyteamComponent,
        RankingComponent,
        StatisticsComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        APP_ROUTING,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        MyteamService,
        StatisticsService,
        PlayersService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
