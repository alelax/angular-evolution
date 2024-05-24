import { Injectable, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  config = signal({
    title: 'Angular shop',
    color: '#ffffff',
    enableShop: true
  })

  setTitle(title: string) {
    this.config.update(conf => ({ ...conf, title }));
  }

  setColor(color: string) {
    this.config.update(conf => ({ ...conf, color }));
  }

  setEnableShop(enableShop: boolean) {
    this.config.update(conf => ({ ...conf, enableShop }));
  }
}
