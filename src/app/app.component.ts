import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';

import { ColorSwatchComponent } from './components/color-swatch/color-swatch.component';
import { THEME, Theme, ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [ColorSwatchComponent, MatButton, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private _theme = inject(THEME);
  private _themeService = inject(ThemeService);

  get theme(): Theme {
    return this._theme;
  }

  toggleTheme(): void {
    this._theme = this._theme === Theme.Codeweavers ? Theme.Volvo : Theme.Codeweavers;
    this._themeService.setTheme(this._theme);
  }
}
