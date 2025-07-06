import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class LanguageService {

    public get GetLang():string {
        let lang = localStorage.getItem('lang') === 'es' ? 'es' 
            : localStorage.getItem('lang') === 'en' ? 'en'
            : 'pt'
        return lang; 
    }

    public selectLang(lang:string):void {
        localStorage.setItem('lang',lang);
    }
    
}