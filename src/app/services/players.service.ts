import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

let config = require('../../config/config.json');

@Injectable()
export class PlayersService {

  players: any[] = [];

  constructor( private _http: HttpClient ) { console.log(config); }

  private apiURL = config.endpoint + ':' + config.port + config.uriPlayersPath;

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
