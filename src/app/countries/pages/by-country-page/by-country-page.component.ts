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
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {
  }

  public search(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCountry(term)
      .subscribe((resp) => {
        this.isLoading = false;
        this.data = resp;
      })
  }
}
