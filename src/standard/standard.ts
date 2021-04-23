import * as  yaml from 'js-yaml';
import * as Mustache from 'Mustache';
import * as _ from 'lodash';
import * as u from 'lodash-uuid';
import {FileType, read, write} from './fileUtils';

const log = require('ololog').configure({locate: false});

const _flagLast = (arr, lastKey) => [..._.initial(arr), _.defaults(_.last(arr), {[lastKey]: true})];

const formatItem = (c, i) => { // category upper snake
    const {category, extraInterface, items} = c;
    const Upper_Snake_Category = _.chain(category).snakeCase().toUpper().value();
    const UpperCamelCategory = _.chain(category).camelCase().upperFirst().value();
    const hasExtraInterface = !!extraInterface?.length;
    const extraInterfaceString = hasExtraInterface ? _.join(extraInterface, ' , ') : '';
    const mergeItems = _.map(_flagLast(items, 'itemLast'), item => ({
        ...item,
        ..._.omit(c, 'items'),
        itemLabel: item.itemLabel || item.itemKey,
        category,
        Upper_Snake_Category,
        UpperCamelCategory,
    }));
    return {
        ...c,
        category,
        hasExtraInterface,
        extraInterfaceString,
        items: mergeItems,
        Upper_Snake_Category,
        UpperCamelCategory,
        CATEGORY_SEQ: i
    };
};
const formatCategory = categoryArray => {
    const json = JSON.parse(JSON.stringify(categoryArray));
    const result = _.map(_flagLast(json, 'categoryLast'), (item, i) => formatItem(item, i));
    _.each(result, r => _.each(r.items, rr => (rr.last = (r.categoryLast && rr.itemLast))));
    return result;
};

class Category {
    pkg: string;
    clazz: string;
    enums: Array<CategoryItem>;
}

class CategoryItem {
    itemLabel?: string;
    itemName: string;
    itemKey: string;
    itemValue: string;
    itemSeq: number;
    remark?: string;
}

const yaml2json = async ({yamlStr = ''}) => {
    if (!yamlStr || yamlStr.length === 0) {
        throw 'input must be not blank';
    }
    const jsonObject = yaml.safeLoad(yamlStr);

    const categoryArray = formatCategory(jsonObject);

    console.table(_.map(categoryArray, ({category, categoryName, hasExtraInterface, extraInterfaceString}) => ({
        category,
        categoryName,
        hasExtraInterface,
        extraInterfaceString
    })));

    console.table(_.chain(categoryArray)
        .map('items')
        .flatten()
        .map(({
                  itemName, itemKey, itemValue, itemSeq, category, categoryName,
                  remark, itemLabel, last, itemLast, categoryLast, UpperCamelCategory, Upper_Snake_Category
              }) => ({
            category, itemKey, itemValue, itemSeq, categoryName, itemName,
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

const optionLogger = ({message = '', logger = false, output = ''}) => {
    if (!logger) {
        return;
    }
    log.darkGray(`----------------------- ${message} start -----------------------\r\n`);
    log.darkGray(output);
    log.darkGray(`\r\n ----------------------- ${message} end -----------------------`);
};

const json2java = async ({
                             categoryArray,
                             pkg,
                             clazz,
                             template = read({itemName: 'java', type: FileType.mustache}),
                             logger = false
                         }) => {
    const output = Mustache.render(template, {enums: categoryArray, pkg, clazz});
    optionLogger({message: 'mustacheJava', logger, output});
    return output;
};

const json2js = async ({
                           categoryArray,
                           clazz,
                           template = read({itemName: 'js', type: FileType.mustache}),
                           logger = false
                       }) => {
    const output = Mustache.render(template, {enums: categoryArray, clazz});
    optionLogger({message: 'mustacheJavaScript', logger, output});
    return output;
};

const json2sql = async ({
                            categoryArray,
                            uuid = null,
                            template = read({itemName: 'sql', type: FileType.mustache}),
                            logger = false
                        }) => {
    const output = Mustache.render(template, {enums: categoryArray, uuid: _.replace(uuid, /-/g, '_')});
    optionLogger({message: 'json2sql', logger, output});
    return output;
};

const json2md = async ({
                           categoryArray,
                           clazz = null,
                           template = read({itemName: 'md', type: FileType.mustache}),
                           logger = false
                       }) => {
    const output = Mustache.render(template, {enums: categoryArray, clazz});
    optionLogger({message: 'json2md', logger, output});
    return output;
};

const RunException = str => {
    throw str;
};

// const genByYaml = async ({
//                              yamlStr = null,
//                              yamlResName = null,
//                              pkg,
//                              clazz,
//                              output = {java: null, sql: null, json: null, js: null, md: null},
//                              input = null,
//
//                          }) => {
//     yamlStr = yamlStr || read({
//         itemName: yamlResName,
//         type: FileType.yaml,
//         input
//     }) || RunException('yamlStr and yamlResName must be not null ');
//     console.log(' genByYaml config ', output);
//     const {java: javaOutput, sql: sqlOutput, json: jsonOutput, js: jsOutput, md: mdOutput} = output;
//     const uuid = _.replace(u.uuid(), /-/g, '_');
//     const {categoryArray, jsonObject} = await yaml2json({yamlStr});
//
//     console.log('----------  categoryArray:  ----------');
//     console.log(JSON.stringify(categoryArray));
//     await genByJSON({categoryArray, jsonObject, uuid, pkg, clazz, output});
// };

const genJson = async ({
                           yamlStr = null,
                           yamlResName = null,
                           input = null,

                       }) => {
    yamlStr = yamlStr || read({
        itemName: yamlResName,
        type: FileType.yaml,
        input
    }) || RunException('yamlStr and yamlResName must be not null ');
    const {categoryArray, jsonObject} = await yaml2json({yamlStr});
    return {categoryArray, jsonObject};
};

const genByYamlArray = async (configGroup, logger = {java: true, sql: true, json: true, js: true, md: true}) => {
    console.log(' genByYamlArray config ', configGroup, 'logger', logger);

    const jsonGroup = await Promise.all(_.map(configGroup, async ({
                                                                      yamlStr,
                                                                      input,
                                                                      yamlResName,
                                                                      pkg,
                                                                      clazz,
                                                                      output,
                                                                  }) => {
            const g = await genJson({
                yamlStr,
                input,
                yamlResName,
            });
            console.log('   g ', g);
            const result = {
                pkg,
                clazz,
                output,
                ...g,
            };
            console.log('  result ', result);
            return result;
        }
    ));
    // console.log(' genByYamlArray jsonGroup ', JSON.stringify(jsonGroup));

    const duplicated = _.chain(jsonGroup)
        .map('categoryArray')
        .flatMap()
        .groupBy('category')
        .map((v, k) => v.length > 1 ? {category: k} : null)
        .compact()
        .value();
    console.log(' genByYamlArray allCategory ', JSON.stringify(duplicated));
    if (duplicated.length > 0) {
        console.error(' genByYamlArray duplicated ', duplicated.length, _.map(duplicated, 'category').join(","));
        console.table(duplicated);
        process.exit(-1);
    }

    return await Promise.all(_.map(jsonGroup, async ({
                                                         categoryArray,
                                                         jsonObject,
                                                         pkg,
                                                         clazz,
                                                         output,
                                                     }) => await genByJSON({
        categoryArray,
        jsonObject,
        pkg,
        clazz,
        output,
        logger
    })));
};

const genByJSON = async ({
                             categoryArray,
                             jsonObject,
                             pkg,
                             clazz,
                             output = {java: null, sql: null, json: null, js: null, md: null},
                             logger
                         }) => {
    console.log(' genByJSON  categoryArray,                             jsonObject,                             pkg,                             clazz,                             output '
        , categoryArray,
        jsonObject,
        pkg,
        clazz,
        output);
    const uuid = _.replace(u.uuid(), /-/g, '_');
    const pkgPath = _.chain(pkg).split('.').join('/').value();

    const {java: javaOutput, sql: sqlOutput, json: jsonOutput, js: jsOutput, md: mdOutput} = output;

    const padding = _.endsWith('/') ? '' : '/';
    const javaPaddingOutput = _.endsWith(javaOutput, pkgPath) ? javaOutput : `${javaOutput}${padding}${pkgPath}`;

    write({
        itemName: clazz,
        type: FileType.json,
        uuid,
        data: JSON.stringify(jsonObject),
        output: javaPaddingOutput
    });
    log.red(' genByJSON javaPaddingOutput ', javaPaddingOutput);

    const javaStr = await json2java({categoryArray, pkg, clazz, logger: logger.java});
    write({itemName: clazz, type: FileType.java, uuid, data: javaStr, output: javaPaddingOutput});

    const sqlStr = await json2sql({categoryArray, uuid, logger: logger.sql});
    write({itemName: clazz, type: FileType.sql, uuid, data: sqlStr, output: sqlOutput});

    const jsStr = await json2js({categoryArray, clazz, logger: logger.js});
    write({itemName: clazz, type: FileType.javascript, uuid, data: jsStr, output: jsOutput});

    const mdStr = await json2md({categoryArray, clazz, logger: logger.md});
    write({itemName: clazz, type: FileType.md, uuid, data: mdStr, output: mdOutput});
};

export {yaml2json, json2yaml, json2java, json2sql, json2js, _flagLast, formatCategory, genByYamlArray};
