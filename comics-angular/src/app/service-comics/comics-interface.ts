/*El modelo a seguir del objeto comic.*/

export interface Comic {
    id: number;
    img: string;
    name: string;
    types: string [];
    description: string;
    fav: boolean;
  }
