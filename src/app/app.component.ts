import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

type Alert = {
  msg: string;
  type: 'primary' | 'success' | 'danger'
}

type Coords = {
  x: number
  y: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="centred-page sm flex flex-col gap-3">
      

      <!--START::Template-reference-variable-example-->
      <label>ViewChild and Template Reference Variable</label>
      <input type="text" (keydown.enter)="keydownHandler()" #input>
      
      <button (click)="read(input)">READ VALUE</button>
      <!--END::Template-reference-variable-example-->
      
    </div>
    
    
    
  `,
  styles: [`
    
  `],
})
export class AppComponent {

  @ViewChild('input') myInput: ElementRef<HTMLInputElement> | undefined;

  constructor() {
    setTimeout(() => {
      console.log('on constructor: ', this.myInput?.nativeElement.value);
      this.myInput?.nativeElement.focus();
    }, 2000)
  }

  keydownHandler() {

    const text = this.myInput?.nativeElement.value
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    const isUrlValid = text && urlRegex.test(text);

    if (isUrlValid) window.open(text);

  }

  read(input: HTMLInputElement) {
    console.log(this.myInput?.nativeElement.value)
  }
}
