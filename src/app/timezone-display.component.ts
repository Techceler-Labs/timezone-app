import { Component, OnInit,Input,OnChanges,SimpleChanges } from '@angular/core';

import { Countrytimezone } from './countrytimezone';

@Component ({
	selector : 'display-timezones',
	templateUrl : './timezone-display.component.html',
	styleUrls: ['./app.component.css'],
})

export class TimezoneDisplayComponent implements OnChanges  {
    @Input() timezone: Countrytimezone;

    countryTimeZones : Countrytimezone [] = [];

    day : String [] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    ngOnChanges(changes: SimpleChanges) {
		console.log('Change detected:', changes.timezone.currentValue);
		console.log('length'+this.countryTimeZones.length);
	//	console.log('is it blank'+this.countryTimeZones[0].countryName=='');
		if (changes.timezone.currentValue!=''){
			console.log('pushed....')
			this.countryTimeZones.push(changes.timezone.currentValue);
		}
	}

	showMap(timezone:Countrytimezone){
		console.log(timezone.countryName);
		console.log(timezone.countryName);
	}

}