import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VariantIconComponent } from './variant-icon.component';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [ NgClass, VariantIconComponent ],
  template: `
    <div 
      role="alert" 
      class="alert"
      [ngClass]="{
        'alert-info': variant === 'info',
        'alert-success': variant === 'success',
        'alert-error': variant === 'error',
      }"
    >
      <app-variant-icon [variant]="variant" />
      
      <div><ng-content></ng-content></div>
      
      <div>
        <button class="btn btn-sm" (click)="onCancel.emit()">{{ denyLabel }}</button>
        <button 
          class="btn btn-sm" 
          (click)="onConfirm.emit()"
          [ngClass]="{
            'btn-info': variant === 'info',
            'btn-success': variant === 'success',
            'btn-error': variant === 'error',
          }"
        >{{ acceptLabel }}</button>
      </div>

    </div>
  `,
  styles: ``
})
export class AlertComponent {

  @Input() denyLabel = 'no'
  @Input() acceptLabel = 'yes'
  @Input() variant: 'info' | 'success' | 'error' | undefined;

  @Output() onCancel: EventEmitter<void> = new EventEmitter();
  @Output() onConfirm: EventEmitter<void> = new EventEmitter();
}
