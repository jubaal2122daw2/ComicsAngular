/*El modelo a seguir del objeto comic.*/

export interface Comic {
    id: number;
    autor: string;
    img: string;
    name: string;
    types: string [];
    description: string;
    fav: boolean;
  }
