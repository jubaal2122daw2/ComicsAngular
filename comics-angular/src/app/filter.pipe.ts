import { Pipe, PipeTransform } from '@angular/core';
import { Comic } from './service-comics/comics-interface';


@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(array: Comic[], ...args: any): Comic[] {
    const results = [];
    for(const comic of array){
      if(comic.name.toLowerCase().indexOf(args[0].toLowerCase()) > -1 && comic.autor.toLowerCase().indexOf(args[1].toLowerCase()) > -1){
        results.push(comic);
      };
    };
    return results;
  }

}
