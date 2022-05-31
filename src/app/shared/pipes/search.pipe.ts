 import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: string[], searchString: string): string[] {
      if (searchString) {
        let filteredList: string[] = []
        const regex = new RegExp(searchString, 'i')
        value.filter(item => {
          if (regex.test(item)) {
            filteredList.push(item)
          }
        })
        return filteredList
      }
      return value
  }

}
