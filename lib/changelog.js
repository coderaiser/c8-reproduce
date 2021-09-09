import {
    readFile,
} from 'fs/promises';

import {
    execSync,
} from 'child_process';

export default (a, b, c) => {
    if (a)
        return readFile();
     
      if (c)
          return execSync();
      
      return 'd';
};

