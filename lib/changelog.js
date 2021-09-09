import {
    execSync
} from 'child_process';
import tryCatch from 'try-catch';
import shortdate from 'shortdate';
import {
    readPackageUpSync
} from 'read-pkg-up';

export default (versionNew) => {
    const [error, {packageJson} = {}] = tryCatch(readPackageUpSync);
    
    if (error)
        throw `error reading package.json: ${error.message}`;
    
    const isV = /^v/.test(versionNew);
    const version = `v${packageJson.version}`;
    debugger;
    const gitFix = buildCommand('fix', version);
    const gitFeature = buildCommand('feature', version);
    
    if (!isV && versionNew)
        versionNew = 'v' + versionNew;
    
    const fix = execSync(gitFix, {encoding: 'utf8'});
    const feature = execSync(gitFeature, {encoding: 'utf8'});
    
    let head = shortdate();
    let data = '';
    
    if (versionNew)
        head += ', ' + versionNew;
    
    head += '\n\n';
    
    return data;
};

function buildCommand() {
    return 'x';
}
