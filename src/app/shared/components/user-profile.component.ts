import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../models/User';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  template: `
    <pre>{{ items | json }}</pre>

    {{ render() }}
  `,
  styles: ``
})
export class UserProfileComponent {
  
  @Input() items: any = [];

  @Input() set id(val: number | undefined) {
    console.log('val: ', val);
  };
  
  render() {
    console.log('render user-profile component');    
  }

  
}
