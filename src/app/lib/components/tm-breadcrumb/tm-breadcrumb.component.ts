import { Component, inject, signal } from '@angular/core';
import { ActivatedRouteSnapshot, ActivationEnd, Router } from '@angular/router';

import { filter, map } from 'rxjs';
import { LanguagePipe } from '../../pipes/language.pipe';
import { LanguageService } from '../../services/language.service';

@Component({
  standalone:true,
  selector: 'tm-breadcrumb',
  imports: [ LanguagePipe ],
  template:`
  <p class="
        font__size--h6 
        font__weight--semibold 
        font__color--primary"
        style="white-space: nowrap;">
      {{ title() | language:languageService.GetLang }} 
    </p>
  `,
})
export class TmBreadcrumbComponent {
  private router = inject( Router );
  public languageService = inject( LanguageService );

  public title = signal<string>('');

  constructor() {  this.getRouteData(); }

  public getRouteData():void {
    const currentRoute = this.router.routerState.snapshot.root;
    this.setTitleFromRoute(currentRoute);

    this.router.events
    .pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event:ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event:ActivationEnd) => event.snapshot.data['language'] ),
    )
    .subscribe( data=>{
      this.title.set(data);
    });
  }

  private setTitleFromRoute(routeSnapshot: ActivatedRouteSnapshot ):void {
    if (!routeSnapshot.firstChild) {
      this.title.set(routeSnapshot.data['language']);
    } else {
      this.setTitleFromRoute(routeSnapshot.firstChild);
    }
  }
}