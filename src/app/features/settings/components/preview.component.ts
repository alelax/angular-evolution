import { Component, inject } from '@angular/core';
import { SettingsService } from '../../../core/settings.service';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-xl my-6">Preview</h1>

    <div
      class="text-2xl"
      [style.color]="settingsService.color()"
    >
        {{settingsService.title()}}
    </div>

    @if (settingsService.isShopEnabled()) {
        <button
          class="btn btn-primary my-6"
        >
            Add To Cart
        </button>    
    }
  `,
  styles: ``
})
export class PreviewComponent {
  settingsService = inject(SettingsService)
}
