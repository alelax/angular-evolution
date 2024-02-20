import { Component, Input, booleanAttribute, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [],
  template: `
    <div class="mockup-phone">
      <div class="camera"></div> 
      <div class="display">
        <div class="artboard artboard-demo phone-1">
          <img 
            [style.width.%]="size"
            [src]="url" 
            [alt]="alt" 
          >
          @if (showTitle) {
            <div>{{ alt }}</div>
          }
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class PhoneComponent {
  @Input({ required: true }) url: string = '';
  @Input({ transform: (val: string) => val.toUpperCase()}) alt: string = '';

  /* 
    booleanAttribute e numberAttribute permettono di passare al compoenente le
    proprietà senza utilizzare le parentesi quadre, e trasformano le stringhe
    nei rispettivi valori.
  */
  @Input({ transform: booleanAttribute }) showTitle = false;
  @Input({ transform: (val: 'sm' | 'md' | 'xl') => {
    switch (val) {
      case 'sm': return 50;
      case 'md': return 75;
      default:
      case 'xl': return 100;
    }
  }}) 
  size: number = 50
}
