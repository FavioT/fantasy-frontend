import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlayersService {

  constructor( private _http: HttpClient ) { }

  private apiURL = 'http://66.97.33.14:3000/api/v1/players';

  getAllPlayers() {
    return this._http.get(this.apiURL);
  }

}

export interface AllPlayers {
  name: string,
  birthday: string,
  height: string,
  weight: number,
  playerId: number,
  position: number,
  school: string,
  team: string,
}
