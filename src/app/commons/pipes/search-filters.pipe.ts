import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilters',
  pure: false
})
export class SearchFiltersPipe implements PipeTransform {
  transform(items: any[], filters: any, filteredData: any): any {
    if (!items || !filters) {
      return items;
    }

    const result = items.filter(item => {
      for (const key in filters) {
        if (item[key] === undefined ||
          (typeof filters[key] === 'string' && item[key].indexOf(filters[key]) === -1) ||
          ((typeof filters[key] === 'number' || typeof filters[key] === 'boolean') && item[key] !== filters[key])) {
          return false;
        }
      }
      return true;
    });

    filteredData.count = result.length;
    return result;
  }
}
