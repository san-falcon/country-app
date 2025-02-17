import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: `
  img {
    width: 25px;
  }`,
  standalone: false
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];

  @Input()
  public isLoading: boolean = false;
}
