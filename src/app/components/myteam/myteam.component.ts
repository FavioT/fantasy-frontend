import { Component, OnInit } from '@angular/core';
import { MyteamService } from '../../services/myteam.service';

@Component({
    selector: 'app-myteam',
    templateUrl: './myteam.component.html',
    styleUrls: ['./myteam.component.css']
})

export class MyteamComponent implements OnInit {

	myFantasyTeam: any;

    constructor( private myteamService: MyteamService ) { }

    ngOnInit() {
  	    this.getTeam();
    }

    getTeam() {
        this.myteamService.getTeam().subscribe(
            data => {
                this.myFantasyTeam = data;
            });
  	}

}
