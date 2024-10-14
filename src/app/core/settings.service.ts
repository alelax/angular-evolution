import { Injectable, computed, signal } from '@angular/core';
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


  // Migliora la renderizzazione perchè la vista non verrà renderizzata
  // ogni volta che cambia l'oggetto config ma solo quando cambia la proprietà
  // utilizzata in quel punto
  title = computed(() => this.config().title);
  color = computed(() => this.config().color);
  isShopEnabled = computed(() => this.config().enableShop);


  setConfig(propName: string, value: string) {
    this.config.update(cfg => ({...cfg, [propName]: value}));
  }

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
