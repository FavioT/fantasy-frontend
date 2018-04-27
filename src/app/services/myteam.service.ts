import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MyteamService {  

    constructor( private _http: HttpClient ) { }

    private apiURL = 'http://localhost:3000/api/v1/myteam';

    getTeam() {
        return this._http.get(this.apiURL);
    }

}

export interface Team {
	firstName: string,
	lastName: string,
	playerId: number,
	teamId: number,
	fullName: string
}