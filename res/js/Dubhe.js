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


const Dubhe = {};

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


Dubhe['ActionType'] = ActionType.$ALL;
Dubhe['ACTION_TYPE'] = ActionType.$ALL;

export default Dubhe;
export function FindEnum(type) {
    return type.$ALL || Dubhe[type];
}

/* eslint-enable  */
