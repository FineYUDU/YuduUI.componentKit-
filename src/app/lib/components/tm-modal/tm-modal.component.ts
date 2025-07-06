import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'tm-modal',
  imports: [CommonModule],
  templateUrl: './tm-modal.component.html',
  styleUrl: './tm-modal.component.css'
})
export class TmModalComponent {
  public isOpenModalEmit = output<boolean>();

  public title = input<string>();
  public type = input<string>();
  public isOpenModal = input<boolean>(true);
  
  public fullSize = input(false, {
    transform:(value:boolean | string)=> 
      typeof value === 'string' ? value === '' : value
  });

  public toggleModal():void {
    this.isOpenModalEmit.emit(this.isOpenModal());
  }
}
