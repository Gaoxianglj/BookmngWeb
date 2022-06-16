import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: `
    <app-sizer [(size)]="fontSizePx"></app-sizer>
    <label [style.font-size.px]="fontSizePx">ParentFontSize: {{fontSizePx}}px</label>
  `
})
export class BindingComponent {
  fontSizePx: number = 16;
}
