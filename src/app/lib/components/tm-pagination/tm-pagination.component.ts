import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, computed, ElementRef, inject, input, output, signal, viewChild } from '@angular/core';

import { LanguageService } from '@services/language.service';
import { ThemeService } from '@services/theme.service';

import { LanguagePipe } from '@shared/pipes/language.pipe';

@Component({
  selector: 'tm-pagination',
  imports: [
    NgOptimizedImage,
    LanguagePipe,
    NgClass,
  ],
  templateUrl: './tm-pagination.component.html',
  styleUrl: './tm-pagination.component.css'
})
export class TmPaginationComponent {
  public themeService = inject( ThemeService );
  public languageService = inject( LanguageService );

  public resetOffset = viewChild<ElementRef<HTMLAnchorElement>>('buttonBackToFirstPage');

  public emitOffset = output<number>();

  public dataLenght = input<number>(0);
  public limitPage = input<number>(0);
  public amount = input<number>(0);

  public offsetPage = signal<number>(0);

  public currentPage = computed<number>(()=> Math.floor(this.offsetPage() / this.limitPage() + 1));
  public totalPages = computed<number>(()=> Math.ceil(this.dataLenght() / this.limitPage()));

  public backToFirstPage():void {
    this.offsetPage.set(0);  
    this.emitOffset.emit(this.offsetPage());
  }
  
  public goToLastPage():void {
    this.offsetPage.set(this.dataLenght() - 1)
    this.emitOffset.emit(this.offsetPage());
  }

  public prevPage():void {
    this.offsetPage.set(this.offsetPage() - this.limitPage());
    this.emitOffset.emit(this.offsetPage());
  }
  
  public nextPage():void {
    this.offsetPage.set( this.offsetPage() +this.limitPage());
    this.emitOffset.emit(this.offsetPage());
  }

}
