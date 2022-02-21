import { Pipe, PipeTransform } from '@angular/core';
import { Comic } from './service-comics/comics-interface';


@Pipe({
  name: 'filter',
  pure: false //la pipe se evalua cada vez que angular encuentra un cambio
})

export class FilterPipe implements PipeTransform {

  transform(array: Comic[], ...args: any): Comic[] {

    var matchGenre: boolean = false;
    let arraySet:string[] = Array.from(args[2]);

      if (array){
        const titolRegex = new RegExp(args[0],'ig');
        const autorRegex = new RegExp(args[1],'ig');
        const genreRegex = new RegExp(args[2],'ig');
        const results = array.filter((x) => x.name.match(titolRegex) && x.autor.match(autorRegex) && checkgenero(x.types));
        return results;
      }

      return [];

      function checkgenero(generos:string[]):boolean{
        if(arraySet.length==0) return true;
        for(let i:number=0 ; i < arraySet.length; i++){
          if(generos.includes(arraySet[i])){
            return true;
          }
        }
        return false;
      }
  }

}