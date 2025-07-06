import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
  standalone: true
})
export class PaginationPipe implements PipeTransform {
  transform(list:any[], page:number = 0, limit:number = 10): any[] {
    return list.slice(page, page + limit );
  }
}