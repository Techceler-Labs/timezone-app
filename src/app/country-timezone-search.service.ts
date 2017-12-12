import { Injectable } from '@angular/core';
import { Http,Response  } 	  from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Countrytimezone } 	from './countrytimezone';
import {MomentModule} from 'angular2-moment';
import {MomentTimezoneModule} from 'angular-moment-timezone';
import * as moment from 'moment-timezone';

@Injectable()
export class CountryTimezoneSearchService {
	public timestamp:number;
	country;
	constructor (private http: Http){}
     public setdate = moment(); // today date

	search (latlong: string,countryName:string): Promise<Countrytimezone> {
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
		return countryToReturn;
		}).catch(this.handleError);
	} 


getDate (timestamp:number)
{
// Multiply by 1000 because JS works in milliseconds instead of the UNIX seconds
var date = new Date(timestamp * 1000);

var year = date.getUTCFullYear();
var month = date.getUTCMonth() + 1; // getMonth() is zero-indexed, so we'll increment to get the correct month number
var day = date.getUTCDate();
var hours = date.getUTCHours();
var minutes = date.getUTCMinutes();
var seconds = date.getUTCSeconds();

var month1 = (month < 10) ? '0' + month : month;
var day1 = (day < 10) ? '0' + day : day;
var hours1 = (hours < 10) ? '0' + hours : hours;
var minutes1 = (minutes < 10) ? '0' + minutes : minutes;
var seconds1 = (seconds < 10) ? '0' + seconds: seconds;

return year + '-' + month1 + '-' + day1 + ' ' + hours1 + ':' + minutes1;
}

 	private handleError(error: any): Promise<any> {
     	console.error('An error occurred', error); // for demo purposes only
    	return Promise.reject(error.message || error);
	}
}