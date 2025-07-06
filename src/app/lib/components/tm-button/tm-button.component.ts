import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'tm-button',
  imports: [
    CommonModule,
  ],
  templateUrl: './tm-button.component.html',
  host:{
    '[class.pointer-events--none]':'disabled()',
    '[class.w--100]':'fullSize()'
  }
})
export class TmButtonComponent  {
  public size = input.required<string>();
  public type = input<string>();

  public primary = input(false, {
    transform:(value:boolean | string) => 
      typeof value === 'string' ? value === '' : value
  });

  public secondary = input(false, {
    transform:(value:boolean | string) => 
      typeof value === 'string' ? value === '' : value
  });
  
  public tertiary = input(false, {
    transform:(value:boolean | string) => 
      typeof value === 'string' ? value === '' : value
  });

  public disabled = input(false, {
    transform:(value:boolean | string) => 
      typeof value === 'string' ? value === '' : value
  });
  
  public fullSize = input(false, {
    transform:(value:boolean | string) => 
      typeof value === 'string' ? value === '' : value
  });
}
