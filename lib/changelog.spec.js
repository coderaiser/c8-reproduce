import {createMockImport} from 'mock-import';
import {
    test,
    stub,
} from 'supertape';

const {mockImport, reImport, stopAll} = createMockImport(import.meta.url);

test('changelog: a', async (t) => {
    mockImport('fs/promises', {
        readFile: stub().returns('a'),
    });
    const fn = await reImport('./changelog.js');
    
    t.equal(fn.default(1), 'a');
});

test('changelog: b', async (t) => {
    mockImport('fs/promises', {
        writeFile: stub().returns('b'),
    });
    const fn = await reImport('./changelog.js');
    
    t.equal(fn.default(0, 1), 'b');
});

test('changelog: c', async (t) => {
    mockImport('child_process', {
        execSync: stub().returns('c'),
    });
    
    const fn = await reImport('./changelog.js');
    
    t.equal(fn.default(0, 0, 1), 'c');
});

test('changelog: d', async (t) => {
    const fn = await import('./changelog.js?count=4');
    
    t.equal(fn.default(0, 0, 0, 1), 'd');
});

