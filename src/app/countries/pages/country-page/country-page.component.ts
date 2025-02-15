import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  standalone: false,
  templateUrl: './country-page.component.html',
  styles: ``
})

//? El onInit sirve para decir al usuario que espere hasta que se cargue la información

export class CountryPageComponent implements OnInit {


  /* public country: Country | null = null; */
  /* Signficado del signo '?'
    ? Esto indica que la propiedad no es obligatoria y, si no se asigna, su valor será undefined.
  */
  public country?: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    /*
    Esta es una manera larga de hacer 2 observable en uno solo, en el otro codigo usamos los pipe
    this.activateRoute.params
    .subscribe(({ id }) => {
      this.countriesService.searchCountryAlphaCode(id)
        .subscribe(country => {
          console.log(country);
        })
    }) */
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountryAlphaCode(id))
      )
      .subscribe((country) => {
        if (!country) {
          return this.router.navigateByUrl(''); //? Esto redirecciona
        }
        setTimeout(() => {
          this.country = country;
        }, 1500);
        console.log("Tenemos un papis:", country);
        return;
      })
  }
}
