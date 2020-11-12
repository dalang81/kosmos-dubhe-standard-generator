import * as _ from 'lodash';
import * as u from 'lodash-uuid';
import {genByYaml, json2java, json2sql, json2js, yaml2json, formatCategory} from './standard';
import {FileType, read, write} from './fileUtils';

const yamlStr = `
- category: YES_NO
  categoryName: 是否标识
  items:
    - label: 'YES'
      name: 是
      itemKey: 'YES'
      itemValue: '1'
      itemSeq: 1
    - label: 'NO'
      name: 否
      itemKey: 'NO'
      itemValue: '0'
      itemSeq: 0
- category: GENDER
  categoryName: 性别
  items:
    - name: 男
      itemKey: 'MALE'
      itemValue: '1'
      itemSeq: 1
    - label: 'FEMALE'
      name: 女
      itemKey: 'FEMALE'
      itemValue: '2'
      itemSeq: 2
      remark: 'maybe 0'
- category: ACTION_TYPE
  categoryName: 操作类型
  items:
    - name: 创建
      itemKey: 'CREATE'
      itemValue: '10'
      itemSeq: 1
    - name: 编辑
      itemKey: 'UPDATE'
      itemValue: '20'
      itemSeq: 2
    - name: 删除
      itemKey: 'REMOVE'
      itemValue: '30'
      itemSeq: 3
    - name: 查询
      itemKey: 'QUERY'
      itemValue: '40'
      itemSeq: 4
    - name: 上报
      itemKey: 'REPORT'
      itemValue: '50'
      itemSeq: 5
`;

const jsonStr = `
[
  {
    "category": "YES_NO",
    "categoryName": "是否标识",
    "items": [
      {
        "name": "是",
        "itemKey": "YES",
        "itemValue": "1",
        "itemSeq": 1
      },
      {
        "name": "否",
        "itemKey": "NO",
        "itemValue": "0",
        "itemSeq": 0
      }
    ]
  }
] 
`;

const setup = () => {
    const uuid = _.replace(u.uuid(), /-/g, '_');
    const categoryArray = formatCategory(yaml2json({yamlStr}));
    const pkg = 'org.eg';
    const clazz = 'Dubhe';
    return {uuid, categoryArray, pkg, clazz};
};

const testJava = async () => {
    const {uuid, categoryArray, pkg, clazz} = setup();
    await json2java({
        categoryArray,
        pkg: 'org.eg',
        clazz: 'Dubhe',
    });
};

const testSql = async () => {
    const {uuid, categoryArray, pkg, clazz} = setup();
    await json2sql({
        categoryArray,
        uuid
    });
};

const testJs = async () => {
    const {uuid, categoryArray, pkg, clazz} = setup();
    await json2js({
        categoryArray,
        clazz
    });
};
// main
const testGenByYaml = () => {
    //const categoryArray = yaml2json({yamlStr});
    /*const yamlStr = read('dubhe', FileType.yaml);
    const categoryArray = yaml2json({yamlStr});*/
    // console.log(' yaml2json jsonObj ', JSON.stringify(jsonObj));
    // const r2 = json2yaml({jsonObj: categoryArray});
    //  console.log(' yaml2json yamlstr ', r2);
    /* const javaStr = await testJava({categoryArray, pkg: 'com.kosmos.dubhe.standard', clazz: 'DubheEnum'});
     write('DubheEnum', FileType.java, javaStr);

     const sqlStr = await testSql({
         categoryArray,
         uuid: _.replace(u.uuid(), /-/g, '_')
     });
     write('DubheEnum', FileType.sql, sqlStr);*/
    genByYaml({
        yamlResName: 'Dubhe',
        pkg: 'com.kosmos',
        clazz: 'Dubhe'
    }).then();

};
testGenByYaml();
// testSql().then();
// testJava().then();
// testJs().then();




