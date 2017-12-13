import { Component, OnInit } from '@angular/core';


import { CountryDataService } from './country-data.service';
import { CountryTimezoneSearchService} from './country-timezone-search.service';

import { Countrytimezone } from './countrytimezone';
import { Country } from './country';

import { TimezoneDisplayComponent } from './timezone-display.component';


@Component ({
	selector : 'country-timezone-search',
	templateUrl : './country-timezone-search.component.html',
  styleUrls: ['./app.component.css'],
	providers : [CountryTimezoneSearchService]
})

export class CountryTimezoneSearchComponent implements OnInit {
    selectedCountryLocation = '';
    selectedCountry : Country;
    selectedCountryName = '';

    countries: Country[] = [];
    currentCountrytimeZone: Countrytimezone;
    
    displayable = false; 
  	
  	constructor(
        private countryTimezoneSearchService: CountryTimezoneSearchService, private countryDataService: CountryDataService) {}
  
    showCountries (){
      this.displayable = true;
    } 

   addCountry(){
	    console.log('selected country: ' + this.selectedCountryLocation);
   		if (this.selectedCountryLocation!=''){
        this.currentCountrytimeZone = new Countrytimezone();
 				this.countryTimezoneSearchService.search(this.selectedCountryLocation,this.selectedCountryName).then(c  => this.currentCountrytimeZone = c);
        this.selectedCountryLocation = '';
			  console.log('dfsdf'+this.currentCountrytimeZone.currentTimeStamp);
   		}
   		else {
   		     console.log('No country selected');
   		}
   }
   
   onCountryChange(newValue) {
    console.log(newValue);
    this.selectedCountryLocation = newValue.value;
    this.selectedCountryName = newValue.name;  
  }

  ngOnInit(): void {
    this.countries = this.countryDataService.getCountries();
    this.addCountry();
  }
}