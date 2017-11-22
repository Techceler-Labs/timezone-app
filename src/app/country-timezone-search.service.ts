import { Injectable } from '@angular/core';
import { Http,Response  } 	  from '@angular/http';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { Countrytimezone } 	from './countrytimezone';

@Injectable()
export class CountryTimezoneSearchService {
	
	constructor (private http: Http){}

	search (term: string): Promise<Countrytimezone> {
		console.log('searching for '+ term + '.....');
		return this.http 
		.get ('http://api.worldweatheronline.com/premium/v1/tz.ashx?key=4be022d994dd47d7839104644170404&q='+term+'&format=json')
		.toPromise()
		.then(this.extractData)
		.catch(this.handleError);
	} 

	private extractData(res: Response) {
    	console.log('extracting data now');
    	let body = res.json();
    	let countryToReturn = new Countrytimezone();
	
		console.log(body.data);
		countryToReturn.countryName = body.data.request[0].query;
  		countryToReturn.localTime = body.data.time_zone[0].localtime.split(' ')[1];
  		countryToReturn.currentDay = new Date(body.data.time_zone[0].localtime.split(' ')[0]).getDay();
  		countryToReturn.utcOffset = body.data.time_zone[0].utcOffset;
    	
    	console.log (countryToReturn);
    	return countryToReturn;
    }

	private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}