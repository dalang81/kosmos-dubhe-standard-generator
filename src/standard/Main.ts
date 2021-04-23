import {genByYamlArray} from './standard';

const logger = {java: false, sql: false, json: false, js: false, md: false};
const configPath = process.argv[2];
if (!configPath) {
    console.log('  configPath ', configPath, 'must be not null');
}
console.log('  configPath ', configPath);
genByYamlArray(require(`${configPath}`), logger).then();
