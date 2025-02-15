import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-about-page',
  templateUrl: './about-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  standalone: false
})
export class AboutPageComponent { }
