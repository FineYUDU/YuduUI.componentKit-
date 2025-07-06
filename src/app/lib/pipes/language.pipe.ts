import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'language',
    standalone:true
})

export class LanguagePipe implements PipeTransform {
  
  transform(languageKey: string | undefined, lang: string): string {

    if (!languageKey) return '';
    

    const currentLang = lang || localStorage.getItem('lang') || 'es';

    try {
      const languages = require(`../../../assets/lang/${currentLang}.json`);

      const keys = languageKey.split('.');

      let language = languages;
      for (const key of keys) {
          if (language.hasOwnProperty(key)) {
              language = language[key];
          } else {
              language = languageKey;
              break;
          }
      }

      return language;

      } catch (error) {
        console.error('Error loading languages:', error);
        // Return the key itself if language fails
        return languageKey;
      }
    }
}