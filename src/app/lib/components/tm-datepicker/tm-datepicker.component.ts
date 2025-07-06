import { CommonModule } from '@angular/common';
import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

const VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TmDatepickerComponent),
  multi: true,
};

@Component({
  selector: 'tm-datepicker',
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './tm-datepicker.component.html',
  providers: [VALUE_ACCESSOR]
})
export class TmDatepickerComponent implements ControlValueAccessor {
  public fieldValue = signal<string>('');
  public isDisabled = signal<boolean>(false);

  public label = input<string>();
  public placeholder = input<string>();
  public errorMessage = input<string | null>('');
  public hasAnError = input<boolean>(false);
  public minDate: string = new Date().toISOString().split('T')[0];

  public readonly = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });

  public disabled = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });

  public fill = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });

  private _onChangeCb?: (value: any) => void;
  private _onTouched: () => void = () => {};

  public writeValue(obj: any): void {
  const today = new Date().toISOString().split('T')[0]; // formato YYYY-MM-DD

  this.fieldValue.set(obj || today);
}

  public registerOnChange(fn: any): void {
    this._onChangeCb = fn;
  }

  public registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }

  public onBlur(): void {
    this._onTouched();
  }

  public changeValue(event: any): void {
    const value = event.target.value;
    this.fieldValue.set(value);
    this._onChangeCb?.(value);
  }
}
