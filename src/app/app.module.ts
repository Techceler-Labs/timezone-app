import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ButtonsModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { CountryTimezoneSearchComponent } from './country-timezone-search.component';
import { TimezoneDisplayComponent } from './timezone-display.component';

import { CountryTimezoneSearchService } from './country-timezone-search.service';
import { CountryDataService } from './country-data.service';

@NgModule({
  declarations: [
    AppComponent,
    CountryTimezoneSearchComponent,
    TimezoneDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonsModule.forRoot()
  ],
  providers: [CountryTimezoneSearchService,CountryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
