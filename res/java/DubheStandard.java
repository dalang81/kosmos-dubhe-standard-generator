package com.kosmos.dubhe;

import com.kosmos.dubhe.standard.EnumType;
import static com.kosmos.dubhe.standard.EnumTypeUtils.ENUM_SELF_INTEGER;
import static com.kosmos.dubhe.standard.EnumTypeUtils.ENUM_SELF_STRING;

public enum DubheStandard {
    INSTANCE;

        public enum ActionType implements EnumType<ActionType> {
                CREATE("创建","CREATE","10",1),   
                UPDATE("编辑","UPDATE","20",2),   
                REMOVE("删除","REMOVE","30",3),   
                QUERY("查询","QUERY","40",4),   
                REPORT("上报","REPORT","50",5),   
            SELF(ENUM_SELF_STRING, ENUM_SELF_STRING, ENUM_SELF_STRING, ENUM_SELF_INTEGER);

            public static final String CATEGORY = "ACTION_TYPE";
            public static final String CATEGORY_NAME = "操作类型";
            public static final ActionType DEFAULT = values()[0];

            ActionType(String itemName, String itemKey, String itemValue, Integer itemSeq) {
                this.itemName = itemName;
                this.itemKey = itemKey;
                this.itemValue = itemValue;
                this.itemSeq = itemSeq;
            }

            private final String itemName;
            private final String itemKey;
            private final String itemValue;
            private final Integer itemSeq;

            public String getItemName() {
                return itemName;
            }

            public String getItemKey() {
                return itemKey;
            }

            public String getItemValue() {
                return itemValue;
            }

            public Integer getItemSeq() {
                return itemSeq;
            }

            public String getString() {
                return toString().toLowerCase();
            }

            @Override
            public  ActionType[] allValues() {
                return values();
            }

            @Override
            public String getCategory() {
                return CATEGORY;
            }

            @Override
            public String getCategoryName() {
                return CATEGORY_NAME;
            }
        }

        public enum YesNo implements EnumType<YesNo> {
                YES("是","YES","1",1),   
                NO("否","NO","0",0),   
            SELF(ENUM_SELF_STRING, ENUM_SELF_STRING, ENUM_SELF_STRING, ENUM_SELF_INTEGER);

            public static final String CATEGORY = "YES_NO";
            public static final String CATEGORY_NAME = "是否";
            public static final YesNo DEFAULT = values()[0];

            YesNo(String itemName, String itemKey, String itemValue, Integer itemSeq) {
                this.itemName = itemName;
                this.itemKey = itemKey;
                this.itemValue = itemValue;
                this.itemSeq = itemSeq;
            }

            private final String itemName;
            private final String itemKey;
            private final String itemValue;
            private final Integer itemSeq;

            public String getItemName() {
                return itemName;
            }

            public String getItemKey() {
                return itemKey;
            }

            public String getItemValue() {
                return itemValue;
            }

            public Integer getItemSeq() {
                return itemSeq;
            }

            public String getString() {
                return toString().toLowerCase();
            }

            @Override
            public  YesNo[] allValues() {
                return values();
            }

            @Override
            public String getCategory() {
                return CATEGORY;
            }

            @Override
            public String getCategoryName() {
                return CATEGORY_NAME;
            }
        }

}

