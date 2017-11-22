import { Component, OnInit,Input,OnChanges,SimpleChanges } from '@angular/core';

import { Countrytimezone } from './countrytimezone';

@Component ({
	selector : 'display-timezones',
	templateUrl : './timezone-display.component.html',
})

export class TimezoneDisplayComponent implements OnChanges  {
    @Input() timezone: Countrytimezone;

    countryTimeZones : Countrytimezone [] = [];

    day : String [] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    ngOnChanges(changes: SimpleChanges) {
		console.log('Change detected:', changes.timezone.currentValue);
		this.countryTimeZones.push(changes.timezone.currentValue);
	}
}