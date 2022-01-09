# 🛠 c8-reproduce

`c8` Lies in it's report when node.js loader and [mocks](https://github.com/coderaiser/mock-import) used. There is not uncovered lines actually.

![132669108-53525a81-6bb5-4a72-aa07-81360ce1b5c5](https://user-images.githubusercontent.com/1573141/147936991-881d56d2-5571-4432-aa84-aeb1bfc60ee8.png)

## Why do I need `mocks`?

When I have next code:

```js
import {readFileSync} from 'fs'; // don't want actual reading
import {execSync} from 'child_process'; // don't need actual execution

// just want test the function
export default async (name, program) => {
    if (name)
        return readFileSync(name, 'utf8');
     
      if (program)
          return execSync(program);
      
      return 'nothing';
};
```

I need to `mock` `readFile` and `execSync` somehow. If I don't use transpiler-based solutions (like `tap`, `jest`, `ava` etc), I have only `loaders` way of doing thing. I'm using 📼[`Supertape`](https://github.com/coderaiser/supertape) to get thins fast, so I need a way to mock `EcmaScript Modules` without transpiling (to have things fast). So I use some transformation, but it's very simple and works with help of loaders which is very fast.

## ISSUES
- ⏳  [c8](https://github.com/bcoe/c8/issues/325): removes all query parameters (`?mock-import-count=x`, used by `mock-import`); 
- ⏳ [nodejs](https://github.com/nodejs/node/issues/41387): `v8` produces not full coverage information;  

## Posibile solutions

- 🎩[`ESCover`](https://github.com/coderaiser/escover): coverage for EcmaScript Modules, based on 🐊[`Putout`](https://github.com/coderaiser/putout) and node.js loaders.
