import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, forwardRef, inject, input, output, signal, viewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

import { ThemeService } from '@services/theme.service';

import { ListItems } from '@shared/lib/interfaces/select-dropdown.interfaces';

const VALUE_ACCESOR = {
  provide:NG_VALUE_ACCESSOR,
  useExisting: forwardRef(()=> TmSelectDropdownComponent),
  multi:true,
};
@Component({
  selector: 'tm-select-dropdown',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgOptimizedImage,
  ],
  templateUrl: './tm-select-dropdown.component.html',
  styleUrl: './tm-select-dropdown.component.css',
  providers:[VALUE_ACCESOR],
  host:{
    '(document:click)':'handleClickOutsideDropdown($event)'
  }

})
export class TmSelectDropdownComponent  {
  private selectDropdownElementRef = viewChild<ElementRef>('selectDropdown');

  private handleClickOutsideDropdown(event:MouseEvent):void {
    if(this.isDropdownOpen()) {
      const clickInside = this.selectDropdownElementRef()?.nativeElement.contains(event.target);
      if(!clickInside) this.isDropdownOpen.set(false);
    }
  }

  public emitDropdownValue = output<any>();

  public themeService = inject( ThemeService );

  public hasAnError = input<boolean>(false);
  public errorMessage = input<string | null>('');
  public label = input();
  public placeholder = input();
  public listItems = input<ListItems[]>([]);

  public isDropdownOpen = signal<boolean>(false);

  public toggleDropdown():void {
    this.isDropdownOpen.set(!this.isDropdownOpen());
  }
  public readonly = input(false, {
    transform:(value:boolean | string ) => 
      typeof value === 'string' ? value === '' : value
  });

  public textarea = input(false, {
    transform:(value:boolean | string ) => 
      typeof value === 'string' ? value === '' : value
  });

  public disabled = input(false, {
    transform:(value:boolean | string ) => 
      typeof value === 'string' ? value === '' : value
  });

  public fill = input(false, {
    transform:(value:boolean | string ) => 
      typeof value === 'string' ? value === '' : value
  });

  public icon = input(false, {
    transform:(value:boolean | string ) => 
      typeof value === 'string' ? value === '' : value
  });

  public setItem(item: ListItems):void {
    this.isDropdownOpen.set(false);
    this.emitDropdownValue.emit(item);
    this.fieldValue.set(item.text);
    this._onChangeCb?.(item.text);
  }

  public fieldValue = signal<string>('');
  private _onChangeCb?:Function;  
  private _onTouched:() => void = () => {};

  public onBlur():void {
    this._onTouched();
  }

  public changeValue($event: any) {
    this._onChangeCb?.($event.target.value);
  }

  public writeValue(obj: any): void {
    this.fieldValue.set(obj);
  }
  public registerOnChange(fn: any): void {
    this._onChangeCb = fn;
  }
  public registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

}
