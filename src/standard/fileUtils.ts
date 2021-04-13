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

const realPath = (itemName, type) => path.join(resPath(), getPrefix(type), `${itemName}.${getSuffix(type)}`);

const genPath = (output, itemName, type) => path.join(output, `${itemName}.${getSuffix(type)}`);

const backup = fileName => fs.existsSync(fileName) && fs.renameSync(fileName, path.join(`${fileName}.${u.uuid()}.back`));

const read = ({itemName, type, input = null}): string => {
    console.log(' read input ', input);
    const fileName = input ? genPath(input, itemName, type) : realPath(itemName, type);
    return fs.readFileSync(fileName).toString();
};
const write = ({itemName, type, uuid = null, data = '', output = null}): void => {
    console.log(' write output ', output);
    const fileName = output ? genPath(output, itemName, type) : realPath(itemName, type);
    !output && backup(fileName);
    const dirName = path.dirname(fileName);
    console.log(' write dirName ', dirName);
    mkdirp(dirName, () => fs.writeFileSync(fileName, data));
};


export {read, write, FileType};
