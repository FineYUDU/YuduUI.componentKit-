import { CommonModule } from '@angular/common';
import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

const VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TmSliderComponent),
  multi: true,
};

@Component({
  selector: 'tm-slider',
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './tm-slider.component.html',
  providers: [VALUE_ACCESSOR]
})
export class TmSliderComponent implements ControlValueAccessor {
  public fieldValue = signal<number>(0);
  public isDisabled = signal<boolean>(false);

  public label = input<string>();
  public errorMessage = input<string | null>('');
  public step = input<number>(1);
  public min = input<number>(0);
  public max = input<number>(100);

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
    const value = typeof obj === 'number' ? obj : this.min();
    this.fieldValue.set(value);
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
    const value = +event.target.value;
    this.fieldValue.set(value);
    this._onChangeCb?.(value);
  }
}
