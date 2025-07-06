import { Injectable, signal } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
    toggle = signal<boolean>(false);
    
    constructor() {
        let theme = localStorage.getItem('theme');
        this.toggle.set( theme == 'dark' ? true : false );  
    }

    public changeTheme(theme:string): void {
        theme = theme === 'light' ? 'light' : 'dark';

        document.body.classList.toggle('theme--dark', theme === 'dark');
        document.body.classList.toggle('theme--light',theme === 'light');

        localStorage.setItem('theme', theme);
    }

    public toggleTheme(): void {
        this.toggle.set( !this.toggle() );
    
        const theme = this.toggle() ? 'dark' : 'light';
    
        localStorage.setItem('theme', theme);
    
        document.body.classList.toggle('theme--dark', this.toggle());
        document.body.classList.toggle('theme--light', !this.toggle());
    }

    get GetTheme():string | null {
        let mode = localStorage.getItem('theme');
        return mode;
    }
  
}