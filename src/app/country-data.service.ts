import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers} 	  from '@angular/http';

import { Country } 	from './country';

@Injectable()
export class CountryDataService {
	
  COUNTRY: Country[] = [];

	constructor (private http: Http){}

getCountries(): Country[]{
    let andorra = new Country("Andorra","42.546245,1.601554",this.getRandomColor());
    let uae = new Country("United Arab Emirates","23.424076,53.847818",this.getRandomColor());
    let pakistan = new Country("Pakistan","30.375321,69.345116",this.getRandomColor());
    let afghanistan = new Country("Afghanistan","33.93911,67.709953",this.getRandomColor());
    let uk = new Country("United Kingdom","55.378051,-3.435973",this.getRandomColor());

	this.COUNTRY.push(andorra);
	this.COUNTRY.push(uae);
	this.COUNTRY.push(pakistan);
	this.COUNTRY.push(afghanistan);
	this.COUNTRY.push(uk);
	return this.COUNTRY;
} 

	 
	randomcolor = this.getRandomColor();

	 //function to get random colors
    public getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

}