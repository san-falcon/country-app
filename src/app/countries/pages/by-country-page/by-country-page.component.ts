import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  standalone: false,
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public data: Country[] = [];

  constructor(private countriesService: CountriesService) {
  }

  search(term: string): void {
    this.countriesService.searchCountry(term)
      .subscribe((resp) => this.data = resp)
  }
}
