import { Injectable } from '@angular/core';
import { Http,Response  } 	  from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Countrytimezone } 	from './countrytimezone';
import * as moment from 'moment-timezone';

@Injectable()
export class CountryTimezoneSearchService {
	public timestamp:number;
	country;
	constructor (private http: Http){}
     public setdate = moment(); // today date

	search (latlong: string,countryName:string,color: string): Promise<Countrytimezone> {
		this.timestamp = new Date().getTime()/1000;
		console.log('searching for '+ latlong + '.....the timestamp is ' + this.timestamp);
		let url = 'https://maps.googleapis.com/maps/api/timezone/json?location='+latlong+'&timestamp='+this.timestamp +'&key=AIzaSyAMqkI7w4kmzSC7hrRV1RLCA6j2IMiJMZY';
		console.log(url);

		return this.http 
		.get(url)
		.toPromise()
		.then((data) => {//this.extractData;
				console.log('extracting data now');
    	let body = data.json();
    	let countryToReturn = new Countrytimezone();
	
		console.log(body);
		console.log(body.dstOffset+body.rawOffset+this.timestamp);
		countryToReturn.countryName = countryName;
		countryToReturn.dstOffset = body.dstOffset;
		countryToReturn.rawOffset = body.rawOffset;	
		countryToReturn.timeZoneId = body.timeZoneId;
		countryToReturn.timeZoneName = body.timeZoneName;
		countryToReturn.currentTimeStamp = (body.dstOffset+this.timestamp+body.rawOffset);
		countryToReturn.localTime = this.setdate.tz(body.timeZoneId).format('HH:mm');
		countryToReturn.bgColor = color;
		return countryToReturn;
		}).catch(this.handleError);
	} 

 	private handleError(error: any): Promise<any> {
     	console.error('An error occurred', error); // for demo purposes only
    	return Promise.reject(error.message || error);
	}
}