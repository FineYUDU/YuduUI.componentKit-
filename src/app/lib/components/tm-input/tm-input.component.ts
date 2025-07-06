import { CommonModule } from '@angular/common';
import { Component, ElementRef, forwardRef, input, output, signal, viewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteList } from '@shared/lib/interfaces/input.interfaces';

const VALUE_ACCESOR = {
  provide:NG_VALUE_ACCESSOR,
  useExisting: forwardRef(()=> TmInputComponent),
  multi:true,
};
@Component({
  selector: 'tm-input',
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './tm-input.component.html',
  providers:[VALUE_ACCESOR],
  host:{
    '(document:click)':'handleClickOutsideDropdown($event)'
  }
})
export class TmInputComponent implements ControlValueAccessor {
  private selectDropdownElementRef = viewChild<ElementRef>('selectDropdown');

  public emitKeyupEvent = output<string>();
  public emitSearch = output<string>();
  public emitAutocompleteDropdown = output<boolean>();
  public emitAutocompleteValue = output<any>();

  public hasAnError = input<boolean>(false);
  public errorMessage = input<string | null>('');
  public label = input<string>();
  public placeholder = input<string>();
  public autocompleteList = input<AutocompleteList[]>([]);
  
  public isAutocompleteOpen = input<boolean>(false);
  public isDropdownOpen = signal<boolean>(false);
  public isDisabled = signal<boolean>(false);

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

  public autocomplete = input(false, {
    transform:(value:boolean | string ) => 
      typeof value === 'string' ? value === '' : value
  });

  public fieldValue = signal<string>('');
  private _onChangeCb?:Function;  
  private _onTouched:() => void = () => {};

  private handleClickOutsideDropdown(event:MouseEvent):void {
    if(this.isDropdownOpen()) {
      const clickInside = this.selectDropdownElementRef()?.nativeElement.contains(event.target);
      if(!clickInside) this.isDropdownOpen.set(false);
    }
  }

  public setItem(item:any):void {
    this.fieldValue.set(item.text);
    this.emitAutocompleteValue.emit(item);
    this.emitAutocompleteDropdown.emit(false);
    this._onChangeCb?.(item.text);
  }

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
  public setDisabledState?(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }
  public keyupEvent(event:KeyboardEvent) {
    this.emitKeyupEvent.emit(event.key)
  }
  public onSearch(event:string) {
    this.emitSearch.emit(event)
  }


}
