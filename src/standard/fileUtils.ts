import * as fs from "fs";
import * as path from "path";
import * as _ from 'lodash';
import * as u from 'lodash-uuid';
import * as mkdirp from 'mkdirp';

const resPath = () => path.join('../', '../', 'res');

enum FileType {
    yaml = 'yaml|yml',
    java = 'java',
    json = 'json',
    csv = 'csv',
    md = 'md',
    mustache = 'mustache',
    sql = 'sql',
    typescript = 'ts',
    javascript = 'js',
}

const getSuffix = (type: FileType) => {
    const rr = _.split(type, '|');
    return rr[1] || rr[0];
};
const getPrefix = (type: FileType) => {
    const rr = _.split(type, '|');
    return rr[0];
};

const realPath = (name, type) => path.join(resPath(), getPrefix(type), `${name}.${getSuffix(type)}`);

const outputPath = (output, name, type) => path.join(output, `${name}.${getSuffix(type)}`);

const backup = fileName => fs.existsSync(fileName) && fs.renameSync(fileName, path.join(`${fileName}.${u.uuid()}.back`));

const read = ({name, type}): string => fs.readFileSync(realPath(name, type)).toString();
const write = ({name, type, uuid = null, data = '', output = null}): void => {
    console.log(' write output ', output);
    const fileName = output ? outputPath(output, name, type) : realPath(name, type);
    !output && backup(fileName);
    const dirName = path.dirname(fileName);
    console.log(' write dirName ', dirName);
    mkdirp(dirName, () => fs.writeFileSync(fileName, data));
};


export {read, write, FileType};
