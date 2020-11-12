/* eslint-disable  */

class ActionType {
    static CATEGORY = 'ACTION_TYPE';
    static CATEGORY_NAME = '操作类型';

    constructor(itemName, itemKey, itemValue, itemSeq) {
        this.itemName = itemName;
        this.itemKey = itemKey;
        this.itemValue = itemValue;
        this.itemSeq = itemSeq;
    }

    getItemName() {
        return this.itemName;
    }

    getItemValue() {
        return this.itemValue;
    }

    getItemKey() {
        return this.itemKey;
    }

    getItemSeq() {
        return this.itemSeq;
    }

    getCategory() {
        return ActionType.CATEGORY;
    }

    getCategoryName() {
        return ActionType.CATEGORY_NAME;
    }
}
ActionType.CREATE = new ActionType('创建', 'CREATE', '10', 1);  
ActionType.UPDATE = new ActionType('编辑', 'UPDATE', '20', 2);  
ActionType.REMOVE = new ActionType('删除', 'REMOVE', '30', 3);  
ActionType.QUERY = new ActionType('查询', 'QUERY', '40', 4);  
ActionType.REPORT = new ActionType('上报', 'REPORT', '50', 5);  

/************************** ActionType define end ***************************/

class YesNo {
    static CATEGORY = 'YES_NO';
    static CATEGORY_NAME = '是否';

    constructor(itemName, itemKey, itemValue, itemSeq) {
        this.itemName = itemName;
        this.itemKey = itemKey;
        this.itemValue = itemValue;
        this.itemSeq = itemSeq;
    }

    getItemName() {
        return this.itemName;
    }

    getItemValue() {
        return this.itemValue;
    }

    getItemKey() {
        return this.itemKey;
    }

    getItemSeq() {
        return this.itemSeq;
    }

    getCategory() {
        return YesNo.CATEGORY;
    }

    getCategoryName() {
        return YesNo.CATEGORY_NAME;
    }
}
YesNo.YES = new YesNo('是', 'YES', '1', 1);  
YesNo.NO = new YesNo('否', 'NO', '0', 0);  

/************************** YesNo define end ***************************/


const DubheStandard = {};

ActionType.$ALL = [

ActionType.CREATE,
ActionType.UPDATE,
ActionType.REMOVE,
ActionType.QUERY,
ActionType.REPORT,
];

Object.freeze(ActionType);
export { ActionType };

/************************** ActionType export end ***************************/

YesNo.$ALL = [

YesNo.YES,
YesNo.NO,
];

Object.freeze(YesNo);
export { YesNo };

/************************** YesNo export end ***************************/


DubheStandard['ActionType'] = ActionType.$ALL;
DubheStandard['ACTION_TYPE'] = ActionType.$ALL;
DubheStandard['YesNo'] = YesNo.$ALL;
DubheStandard['YES_NO'] = YesNo.$ALL;

export default DubheStandard;
export function FindEnum(type) {
    return type.$ALL || DubheStandard[type];
}

/* eslint-enable  */
