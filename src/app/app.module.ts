import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { MyteamService } from './services/myteam.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MyteamComponent } from './components/myteam/myteam.component';
import { RankingComponent } from './components/ranking/ranking.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        MyteamComponent,
        RankingComponent
    ],
    imports: [
        BrowserModule,
        APP_ROUTING,
        HttpClientModule
    ],
    providers: [
        MyteamService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
