import { DOCUMENT } from '@angular/common';
import { Injectable, InjectionToken, Renderer2, RendererFactory2, inject } from '@angular/core';

export enum Theme {
  Codeweavers = 'cw',
  Volvo = 'volvo'
}

export const THEME = new InjectionToken<Theme>('Theme', {
  providedIn: 'root',
  factory: () => Theme.Codeweavers
});

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly _document = inject(DOCUMENT);
  private readonly _linkElement: HTMLLinkElement;
  private readonly _renderer: Renderer2;
  private readonly _rendererFactory = inject(RendererFactory2);

  constructor() {
    this._renderer = this._rendererFactory.createRenderer(null, null);
    this._linkElement = this._renderer.createElement('link');
    this._renderer.setAttribute(this._linkElement, 'rel', 'stylesheet');
    this._renderer.appendChild(this._document.head, this._linkElement);
  }

  setTheme(theme: Theme): void {
    this._renderer.setAttribute(this._linkElement, 'href', `${theme}.theme.css`);
  }
}
