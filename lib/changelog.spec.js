import {createMockImport} from 'mock-import';
import tryCatch from 'try-catch';
import {
    test,
    stub,
} from 'supertape';

import montag from 'montag';

const {
    mockImport,
    reImportDefault,
    stopAll,
} = createMockImport(import.meta.url);

test('changelog: error', async (t) => {
    const execSync = stub().throws(Error('error!'));
    const shortdate = stub().returns('2021.08.25');
    
    mockImport('child_process', {
        execSync,
    });
    
    mockImport('shortdate', shortdate);
    
    const changelog = await reImportDefault('./changelog');
    const version = '1.0.0';
    const [error] = tryCatch(changelog, version);
    
    stopAll();
    
    t.equal(error.message, 'error!');
    t.end();
});

test('changelog: read package: error', async (t) => {
    const readPackageUpSync = stub().throws(Error('error!'));
    
    mockImport('read-pkg-up', {readPackageUpSync});
    
    const changelog = await reImportDefault('./changelog');
    const version = '1.0.0';
    const [error] = tryCatch(changelog, version);
    
    stopAll();
    
    t.equal(error, 'error reading package.json: error!');
    t.end();
});

