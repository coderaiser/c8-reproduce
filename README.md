# 🛠 c8-reproduce

`c8` Lies in it's report when node.js loader and [mocks](https://github.com/coderaiser/mock-import) used. There is not uncovered lines actually.

![132669108-53525a81-6bb5-4a72-aa07-81360ce1b5c5](https://user-images.githubusercontent.com/1573141/147936991-881d56d2-5571-4432-aa84-aeb1bfc60ee8.png)

## ISSUES
- ⏳  [c8](https://github.com/bcoe/c8/issues/325): removes all query parameters (`?mock-import-count=x`, used by `mock-import`); 
- ⏳ [nodejs](https://github.com/nodejs/node/issues/41387): `v8` produces not full coverage information;  

## Posibile solutions

- 🎩[`ESCover`](https://github.com/coderaiser/escover): coverage for EcmaScript Modules, based on 🐊[`Putout`](https://github.com/coderaiser/putout) and node.js loaders.
