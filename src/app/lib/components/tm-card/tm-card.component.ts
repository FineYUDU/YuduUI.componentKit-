import { NgOptimizedImage } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'tm-card',
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './tm-card.component.html',
  styleUrl: './tm-card.component.css'
})
export class TmCardComponent {
  public themeService = inject( ThemeService );
  
  public title = input.required<string>();
  public description = input<string>('');
  
  public outline = input(false,{
    transform:(value:boolean | string )=>
      typeof value === 'string' ? value === '' : value
  });

  public profilePicture = input<string>('');
  public badge = input<string>();
  
}
