import { Component, OnInit } from '@angular/core';


import { CountryDataService } from './country-data.service';
import { CountryTimezoneSearchService} from './country-timezone-search.service';

import { Countrytimezone } from './countrytimezone';
import { Country } from './country';

import { TimezoneDisplayComponent } from './timezone-display.component';


@Component ({
	selector : 'country-timezone-search',
	templateUrl : './country-timezone-search.component.html',
	providers : [CountryTimezoneSearchService]
})

export class CountryTimezoneSearchComponent implements OnInit {
    selectedCountry = '';
   
    countries: Country[] = [];


	currentCountrytimeZone: Countrytimezone;

	displayable = false; 
  	
  	constructor(
        private countryTimezoneSearchService: CountryTimezoneSearchService, private countryDataService: CountryDataService) {}
  
   showCountries (){
    this.displayable = true;
   } 

   addCountry(){
	    console.log('selected country: ' + this.selectedCountry);
   		if (this.selectedCountry.length>0){
        this.currentCountrytimeZone = new Countrytimezone();
   			this.countryTimezoneSearchService.search(this.selectedCountry).then(c  => this.currentCountrytimeZone = c);
			

			console.log('dfsdf'+this.currentCountrytimeZone.localTime);
   		}
   		else {
   		     console.log('No country selected');
   		}
   }
   
   onCountryChange(newValue) {
    console.log(newValue);
    this.selectedCountry = newValue;
  }

  ngOnInit(): void {
    this.countryDataService.getCountries().then(c  => this.countries = c);
    this.addCountry();
  }

}