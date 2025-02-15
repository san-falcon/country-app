import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { delay, pipe } from 'rxjs';

@Component({
  selector: 'countries-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  constructor(private countriesService: CountriesService) {
  }

  public searchByCapital(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCapital(term)
      .subscribe(resp => {
        this.isLoading = false;
        this.countries = resp;
      });
  }
}
