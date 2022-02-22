import {DBConfig} from 'ngx-indexed-db';

export const dbConfig: DBConfig = {
    name: 'comicsDB',
    version: 5,
    objectStoresMeta: [{
      store: 'comicsTable',
      storeConfig: {keyPath: 'id', autoIncrement: false},
      storeSchema: [
        {name: 'id', keypath: 'id', options: { unique: false}},
        {name: 'fav', keypath: 'fav', options: { unique: false}},
      ]
    }]
  };