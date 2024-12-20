import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';

import { THEME, Theme, ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-select',
  imports: [MatFormField, MatLabel, MatOption, MatSelect, ReactiveFormsModule],
  templateUrl: './theme-select.component.html',
  styleUrl: './theme-select.component.scss'
})
export class ThemeSelectComponent {
  private readonly _defaultTheme = inject(THEME);
  private readonly _themeService = inject(ThemeService);
  readonly themeControl = new FormControl<Theme>(this._defaultTheme);
  readonly themes = signal(Object.values(Theme));

  constructor() {
    this.themeControl.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(theme => {
        if (theme) this._themeService.setTheme(theme);
      });
  }
}
