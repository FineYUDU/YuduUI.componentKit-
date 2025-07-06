import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'tm-chips',
  imports: [
    CommonModule
  ],
  template:`
  <span 
    class="chip__container"
    [class.danger]="danger()"
    [class.success]="success()"
    [class.warning]="warning()"
    [class.info]="info()"
    [ngClass]="{
        'xs': size() === 'xs',
        'sm': size() === 'sm',
        'md': size() === 'md',
        'selected': selected(),
    }">
    {{text()}}
    @if(lenght()) {
      ({{lenght()}})
    }
    @if (closeButton()) {
      <div class="icon-cross" (click)="toggleChip()">
        <span></span>
        <span></span>
      </div>
    }
    
  </span>
  `,
})
export class TmChipsComponent {
  public emitChipToggle = output<boolean>();

  public text = input.required<string>();
  public size = input.required<string>()
  public lenght = input<number>();
  public danger = input(false,{
    transform:(value:boolean | string ) => 
      typeof value === 'string' ? value === '' : value
  });
  public closeButton = input(false,{
    transform:(value:boolean | string ) => 
      typeof value === 'string' ? value === '' : value
  });
  public warning = input(false,{
    transform:(value:boolean | string ) => 
      typeof value === 'string' ? value === '' : value
  });
  public success = input(false,{
    transform:(value:boolean | string ) => 
      typeof value === 'string' ? value === '' : value
  });
  public info = input(false,{
    transform:(value:boolean | string ) => 
      typeof value === 'string' ? value === '' : value
  });
  public selected = input<boolean>();

  public isCloseChip = signal<boolean>(false);

  public toggleChip():void {
    this.isCloseChip.set(!this.isCloseChip());
    console.log(this.isCloseChip());
    this.emitChipToggle.emit(this.isCloseChip());
  }

}
