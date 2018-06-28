import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

let config = require('../../config/config.json');

@Injectable()
export class PlayersService {

  player: any[] = [];

  constructor( private _http: HttpClient ) { }

  private apiURL = config.endpoint + ':' + config.port;

  getAllPlayers() {
    return this._http.get(this.apiURL + '/api/v1/players');
  }

  getPlayer( termino: string ) {
    return this._http.get(this.apiURL + '/api/v1/players/' + termino)
      .map( (resp: any) => {
        this.player = resp.data;
        return this.player;
      });
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
