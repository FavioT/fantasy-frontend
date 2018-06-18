import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  termino: string = '';

  constructor( public _players: PlayersService ) { }

  searchPlayers() {
    console.log(this.termino);

    if (this.termino.length === 0) {
      return;
    }

    this._players.getAllPlayers()
      .subscribe( data => {
        console.log(data);
      })
  }

  ngOnInit() {

  }
}
