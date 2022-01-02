import {
    test,
    stub,
} from 'supertape';

test('simple: a', async (t) => {
    const fn = await import('./simple.js?a=1');
    
    t.equal(fn.default(1), 'a');
    t.end();
});

test('simple: c', async (t) => {
    const fn = await import('./simple.js?a=2');
    t.equal(fn.default(0, 0, 1), 'c');
    t.end();
});

test('simple: d', async (t) => {
    const fn = await import('./simple.js?a=3');
    
    t.equal(fn.default(0, 0, 0, 1), 'd');
});

