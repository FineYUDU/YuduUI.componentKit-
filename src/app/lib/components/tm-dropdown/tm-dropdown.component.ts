import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, inject, input, signal, viewChild } from '@angular/core';

import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'tm-dropdown',
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  templateUrl: './tm-dropdown.component.html',
  host:{
    '[class.pointer-events--none]':'disabled()',
    '[class.w--100]':'fullSize()',
    '(document:click)':'handleClickOutsideDropdown($event)'
  },
})
export class TmDropdownComponent {
  private dropdownElementRef = viewChild<ElementRef>('dropdown');

  private handleClickOutsideDropdown(event:MouseEvent):void {
    if(this.isDropdownOpen()) {
      const clickedInside = this.dropdownElementRef()?.nativeElement.contains(event.target);
      if (!clickedInside) this.isDropdownOpen.set(false);
    }
  }

  private elementRef = inject( ElementRef );
  public themeService = inject( ThemeService );

  public icon = input<string>('chevron');

  public size = input.required<string>();
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

  public isDropdownOpen = signal<boolean>(false);

}
