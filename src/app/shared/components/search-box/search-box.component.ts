import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  standalone: false
})

//? Cuando el componente se inicializa por completo, se ejecuta el metodo OnInit. Se ejecuta especificamente despues del constructor
export class SearchBoxComponent implements OnInit, OnDestroy {

  public debouncer: Subject<string> = new Subject<string>();
  public debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @ViewChild('txtInput')
  public txtInput!: ElementRef<HTMLInputElement>;

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  public onKeyEnter(): void {
    this.onValue.emit(this.txtInput.nativeElement.value);
  }

  public onKeyPress(searchText: string): void {
    //? Enviamos los datos a la suscripcion ya creada
    this.debouncer.next(searchText);
  }

  ngOnInit(): void {
    //? Aqui creamos la suscripcion una unica vez:
    //? Hacemos este proceso para que no me crea una suscripcion cada vez que presiono una tecla
    this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        this.onDebounce.emit(value)
      })
  }

  ngOnDestroy(): void {
    //? Cuando se destruye el componente se ejecuta metodo
    //? Para eliminar la instancia de mi Observable y no quede en memoria
    //? Se elimnina porque cada vez que utilizamos el componente shared-search-box Angular crea una instancia de mi suscribe
    this.debouncerSuscription?.unsubscribe();
  }

}
