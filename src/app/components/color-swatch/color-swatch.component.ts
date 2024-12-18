import { Component, input } from '@angular/core';

@Component({
  selector: 'app-color-swatch',
  templateUrl: './color-swatch.component.html',
  styleUrl: './color-swatch.component.scss',
  host: {
    '[class]': 'palette()'
  }
})
export class ColorSwatchComponent {
  readonly palette = input.required<'primary' | 'secondary' | 'tertiary'>();
}
