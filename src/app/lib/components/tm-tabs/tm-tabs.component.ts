import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

export interface Tabs {
  text:string;
  amount?:number;
}
@Component({
  selector: 'tm-tabs',
  imports: 
  [
    CommonModule,
  ],
  templateUrl: './tm-tabs.component.html',
  styleUrl: './tm-tabs.component.css'
})
export class TmTabsComponent {
  public maxHeight = input<number>();
}