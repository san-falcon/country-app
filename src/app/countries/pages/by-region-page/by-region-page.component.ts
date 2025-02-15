import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public data: Country[] = [];
  public isLoading: boolean = false;

  constructor(public countriesService: CountriesService) { }

  public searchByRegion(term: string): void {
    this.isLoading = true;
    this.countriesService.searchRegion(term).subscribe(resp => {
      this.isLoading = false;
      this.data = resp
    });
  }

}
