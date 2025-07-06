import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocalStorageService } from '@lib/services/localstorage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private _localStorageService = inject( LocalStorageService );  
  
  title = 'yudu-component-kit';
}
