import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TmButtonComponent } from "../tm-button/tm-button.component";

@Component({
  selector: 'tm-alert',
  imports: [
    TmButtonComponent,
    CommonModule,
  ],
  templateUrl: './tm-alert.component.html',
  styleUrl: './tm-alert.component.css',
  host:{
    class:'alert__container'
  }
})
export class TmAlertComponent {
  public emitIsOpenAlert = output<boolean>();

  public title = input<string>(); 
  public message = input<string>();
  public closeButtonText = input<string>('');
  public secondaryButtonText = input<string>();
  public isOpenAlert = input<boolean>(false);
  public success = input(false, {
    transform:(value:boolean | string) => 
      typeof value === 'string' ? value === '' : value
  });
  public danger = input(false, {
    transform:(value:boolean | string) => 
      typeof value === 'string' ? value === '' : value
  });

  public toggleAlert():void {
    this.emitIsOpenAlert.emit(this.isOpenAlert());
  }
  
}
