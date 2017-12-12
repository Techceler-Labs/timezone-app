import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers} 	  from '@angular/http';

import { Country } 	from './country';

@Injectable()
export class CountryDataService {
	
  COUNTRY: Country[] = [];

	constructor (private http: Http){}

getCountries(): Country[]{
    let andorra = new Country("Andorra","42.546245,1.601554");
    let uae = new Country("United Arab Emirates","23.424076,53.847818");
    let pakistan = new Country("Pakistan","30.375321,69.345116");
    let afghanistan = new Country("Afghanistan","33.93911,67.709953");
    let uk = new Country("United Kingdom","55.378051,-3.435973");

	this.COUNTRY.push(andorra);
	this.COUNTRY.push(uae);
	this.COUNTRY.push(pakistan);
	this.COUNTRY.push(afghanistan);
	this.COUNTRY.push(uk);
	return this.COUNTRY;
} 
	// getCountries(): Promise<Country []> {
	// 	console.log("getting list of locations....");

	// let myHeaders = new Headers();
    // myHeaders.append('Access-Control-Allow-Origin', '*');    
    // let options = new RequestOptions({ headers: myHeaders });

	// 	return this.http 
	// 	.get ('https://www.amdoren.com/api/locations.php?api_key=BztRjv5e7a7x3vNLThF4jtqKgV8jv9',options)
	// 	.toPromise()
	// 	.then(this.extractData)
	// 	.catch(this.handleError);
	// }


	// private extractData(res: Response) {
    // 	console.log('extracting locations data now');
    // 	let body = res.json();
    // 	let countryToReturn = new Country();
	
	// 	for(var i=0; i < body.locations.length; i++) {
	// 		console.log(body.locations[i]);
	// 		countryToReturn.name = body.locations[i].country+","+body.locations[i].city;
  	// 		countryToReturn.value = body.locations[i].country+","+body.locations[i].city;
    // 		console.log (countryToReturn);		
	// 	}
		
	// 	this.COUNTRY.push(countryToReturn);
	// 	return this.COUNTRY;
    // }

	// private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error); // for demo purposes only
    // return Promise.reject(error.message || error);
	// }
	 
}