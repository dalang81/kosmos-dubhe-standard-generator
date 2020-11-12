import {genByYaml} from './standard';

const config = require(`../../config.json`);
genByYaml({
    yamlResName: 'Dubhe',
    pkg: 'com.kosmos.dubhe',
    clazz: 'DubheStandard',
    output: config
}).then();
