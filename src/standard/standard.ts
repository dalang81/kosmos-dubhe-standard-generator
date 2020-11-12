import * as  yaml from 'js-yaml';
import * as Mustache from 'Mustache';
import * as _ from 'lodash';
import * as u from 'lodash-uuid';
import {FileType, read, write} from './fileUtils';


const _flagLast = (arr, lastKey) => [..._.initial(arr), _.defaults(_.last(arr), {[lastKey]: true})];

const formatItem = (c, i) => { // category upper snake
    const {category, items} = c;
    const Upper_Snake_Category = _.chain(category).snakeCase().toUpper().value();
    const UpperCamelCategory = _.chain(category).camelCase().upperFirst().value();
    const mergeItems = _.map(_flagLast(items, 'itemLast'), item => ({
        ...item,
        ..._.omit(c, 'items'),
        label: item.label || item.itemKey,
        category,
        Upper_Snake_Category,
        UpperCamelCategory,
    }));
    return {...c, category, items: mergeItems, Upper_Snake_Category, UpperCamelCategory, CATEGORY_SEQ: i};
};
const formatCategory = categoryArray => {
    const josn = JSON.parse(JSON.stringify(categoryArray));
    const result = _.map(_flagLast(josn, 'categoryLast'), (item, i) => formatItem(item, i));
    _.each(result, r => _.each(r.items, rr => (rr.last = (r.categoryLast && rr.itemLast))));
    return result;
};

class Category {
    pkg: string;
    clazz: string;
    enums: Array<CategoryItem>;
}

class CategoryItem {
    name: string;
    itemKey: string;
    itemValue: string;
    itemSeq: number;
    label ?: string;
}

const yaml2json = async ({yamlStr = ''}) => {
    if (!yamlStr || yamlStr.length === 0) {
        throw 'input must be not blank';
    }
    const jsonObject = yaml.safeLoad(yamlStr);

    const categoryArray = formatCategory(jsonObject);

    console.table(_.map(categoryArray, ({category, categoryName}) => ({category, categoryName})));

    console.table(_.chain(categoryArray)
        .map('items')
        .flatten()
        .map(({
                  name, itemKey, itemValue, itemSeq, category, categoryName,
                  remark, label, last, itemLast, categoryLast, UpperCamelCategory, Upper_Snake_Category
              }) => ({
            category, itemKey, itemValue, itemSeq, categoryName, name,
        }))
        .value()
    );
    return {categoryArray, jsonObject};
};

const json2yaml = ({jsonObj = {}}) => {
    if (!jsonObj) {
        throw 'input must be not nil';
    }
    return yaml.safeDump(jsonObj);
};

const json2java = async ({categoryArray, pkg, clazz, template = read({name: 'java', type: FileType.mustache})}) => {
    const output = Mustache.render(template, {enums: categoryArray, pkg, clazz});
    console.log('----------------------- mustacheJava start -----------------------\r\n');
    console.log(output);
    console.log('\r\n ----------------------- mustacheJava end -----------------------');
    return output;
};

const json2js = async ({categoryArray, clazz, template = read({name: 'js', type: FileType.mustache})}) => {
    const output = Mustache.render(template, {enums: categoryArray, clazz});
    console.log('----------------------- mustacheJavaScript start -----------------------\r\n');
    console.log(output);
    console.log('\r\n ----------------------- mustacheJavaScript end -----------------------');
    return output;
};

const json2sql = async ({categoryArray, uuid = null, template = read({name: 'sql', type: FileType.mustache})}) => {
    const output = Mustache.render(template, {enums: categoryArray, uuid: _.replace(uuid, /-/g, '_')});
    console.log('----------------------- json2sql start -----------------------\r\n');
    console.log(output);
    console.log('\r\n ----------------------- json2sql end -----------------------');
    return output;
};

const json2md = async ({categoryArray, clazz = null, template = read({name: 'md', type: FileType.mustache})}) => {
    const output = Mustache.render(template, {enums: categoryArray, clazz});
    console.log('----------------------- json2md start -----------------------\r\n');
    console.log(output);
    console.log('\r\n ----------------------- json2md end -----------------------');
    return output;
};

const RunException = str => {
    throw str;
};

const genByYaml = async ({
                             yamlStr = null,
                             yamlResName = null,
                             pkg,
                             clazz,
                             output = {java: null, sql: null, json: null, js: null, md: null}
                         }) => {
    yamlStr = yamlStr || read({
        name: yamlResName,
        type: FileType.yaml
    }) || RunException('yamlStr and yamlResName must be not null ');
    console.log(' genByYaml output ', output);
    const {java: javaOutput, sql: sqlOutput, json: jsonOutput, js: jsOutput, md: mdOutput} = output;
    const uuid = _.replace(u.uuid(), /-/g, '_');
    const {categoryArray, jsonObject} = await yaml2json({yamlStr});

    console.log('----------  categoryArray:  ----------');
    console.log(JSON.stringify(categoryArray));
    write({name: clazz, type: FileType.json, uuid, data: JSON.stringify(jsonObject), output: jsonOutput});

    const javaStr = await json2java({categoryArray, pkg, clazz});
    write({name: clazz, type: FileType.java, uuid, data: javaStr, output: javaOutput});

    const sqlStr = await json2sql({categoryArray, uuid});
    write({name: clazz, type: FileType.sql, uuid, data: sqlStr, output: sqlOutput});

    const jsStr = await json2js({categoryArray, clazz});
    write({name: clazz, type: FileType.javascript, uuid, data: jsStr, output: jsOutput});

    const mdStr = await json2md({categoryArray, clazz});
    write({name: clazz, type: FileType.md, uuid, data: mdStr, output: mdOutput});
};

export {yaml2json, json2yaml, json2java, json2sql, json2js, _flagLast, formatCategory, genByYaml};
