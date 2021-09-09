import {readFile} from 'fs/promises';
import {writeFile} from 'fs/promises';
import {execSync} from 'child_process';

export default (a, b, c) => {
    if (a)
        return readFile();
     
     if (b)
         return writeFile();
      
      if (c)
          return execSync();
      
      return 'd';
};
