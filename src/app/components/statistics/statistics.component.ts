import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../services/statistics.service';


@Component({
	selector: 'app-statistics',
	templateUrl: './statistics.component.html',
	styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

	myStats: any;

	constructor( private statisticsService: StatisticsService ) { }

	ngOnInit() {
		this.getStats();
	}

	getStats() {
		this.statisticsService.getStats().subscribe(
			data => {
				this.myStats = data;
			})
	}

}
