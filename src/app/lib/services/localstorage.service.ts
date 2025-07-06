import { Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class LocalStorageService {
    constructor() {
        let lang;
        lang =  localStorage.getItem('lang') || 'es';    
        const currentLang = localStorage.getItem('lang');
        if(!currentLang) localStorage.setItem('lang',lang);

        let theme;
        theme = localStorage.getItem('theme') || 'light';
        const currentTheme = localStorage.getItem('theme');
        if(!currentTheme) localStorage.setItem('theme', theme);

        document.body.classList.toggle('theme--dark',theme === 'dark');
        document.body.classList.toggle('theme--light',theme === 'light');   
 
    }
}