import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'tm-loader',
  imports: [CommonModule],
   template: `
    <div class="loader" 
      [ngClass]="{
        'size--md': size() == 'md',
        'size--lg': size() == 'lg',
        'size--xl': size() == 'xl'
        }">
      </div>
  `,
    styles: `
  .loader {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: .0625rem solid var(--yd-color-border-tertiary);
    border-top-color: transparent;
    animation: spin 1.2s linear infinite;
    &.size--md {
      width: 2rem;
      height: 2rem;
      border: .27rem solid var(--yd-color-border-tertiary);
      border-top-color: transparent;
    }
    &.size--lg {
      width: 2.3rem;
      height: 2.3rem;
      border: .29rem solid var(--yd-color-border-tertiary);
      border-top-color: transparent;
    }
    &.size--xl {
      width: 3.4rem;
      height: 3.4rem;
      border: .59rem solid var(--yd-color-border-tertiary);
      border-top-color: transparent;
    }
  }
  @keyframes spin {
    to {
        transform: rotate(360deg);
    }
      
  }
  `
})
export class TmLoaderComponent {
  public size = input.required<string>();
}