import {genByYamlArray} from './standard';

const configPath = process.argv[2];
if (!configPath) {
    console.log('  configPath ', configPath, 'must be not null');
}
console.log('  configPath ', configPath);
genByYamlArray(require(`${configPath}`)).then();
