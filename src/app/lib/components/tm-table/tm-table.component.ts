import { Component, input } from '@angular/core';

@Component({
  selector: 'tm-table',
  imports: [],
  templateUrl: './tm-table.component.html',
  host:{
    'class':'table__container',
    '[class.border]':'noBorder()',
    '[class.height--fit-content]':'fitContent()',
  }
})
export class TmTableComponent {
  public tableId = input<string>();
  public noBorder = input(false, {
    transform:(value:boolean | string) => 
      typeof value === 'string' ? value === '': value
  });

  public fitContent = input(false, {
    transform:(value:boolean | string) => 
      typeof value === 'string' ? value === '': value
  });

}