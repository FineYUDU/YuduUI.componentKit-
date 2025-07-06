import { NgClass } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'tm-checkbox',
  imports: [NgClass],
  templateUrl: './tm-checkbox.component.html',
  styleUrl: './tm-checkbox.component.css'
})
export class TmCheckboxComponent {
  public emitOnChecked = output<boolean>();

  public label = input<string>();
  public isSelected = input<boolean>(false);

  public onCheckboxChange():void {
    this.emitOnChecked.emit(!this.isSelected())
  }
}
