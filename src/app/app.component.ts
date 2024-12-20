import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';

import { ColorSwatchComponent } from './components/color-swatch/color-swatch.component';
import { ThemeSelectComponent } from './components/theme-select/theme-select.component';

@Component({
  selector: 'app-root',
  imports: [ColorSwatchComponent, MatButton, RouterOutlet, ThemeSelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
