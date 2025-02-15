import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

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
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @ViewChild('txtInput')
  public txtInput!: ElementRef<HTMLInputElement>;

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  public emitValue(): void {
    this.onValue.emit(this.txtInput.nativeElement.value);
  }
}
