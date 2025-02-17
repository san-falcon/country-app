import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
/* interface Region { 'Africa': string; 'Americas': string; 'Asia': string, 'Europe': string, 'Oceania': string }; */
/* enum Region {
  Africa, Americas, Asia, Europe, Oceania
} */
@Component({
  selector: 'app-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public data: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectRegion?: Region;

  constructor(public countriesService: CountriesService) { }

  public searchByRegion(region: Region): void {
    this.selectRegion = region;
    this.isLoading = true;
    this.countriesService.searchRegion(region).subscribe(resp => {
      this.isLoading = false;
      this.data = resp
    });
  }

}
