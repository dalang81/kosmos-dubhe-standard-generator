|index | category | categoryName|
|------|----------|-------------|
    |0| 操作类型 | ACTION_TYPE |
    |1| 是否 | YES_NO |
    |2| 性别 | GENDER |
    |3| 时区 | GMT_8 |
    |4| 抗-HBc IgM1:1000检测结果 | ANTI_HBC_IGM |
    |5| 年龄单位 | AGE_UNIT_CODE |
    |6| 用户角色状态 | USER_ROLE_STATUS |
    |7| 病例诊断结果分类 | DIAGNOSIS_STATE |
    |8| 教育程度 | EDUCATION_LEVEL |
    |9| 肝穿检测结果 | HBSAG_CHANGE |
    |10| 证件类型 | IDCARD_TYPE |
    |11| 实验室检测结论 | LABORATORY_CONCLUSION |
    |12| 肝穿检测结果 | HBSAG_LIVER |
    |13| 婚姻状况 | MARITAL_STATUS |
    |14| 有无 | HAS_OR_NO |
    |15| 样本来源 | FOUND_METHOD |
    |16| 感染途径 | BLOOD_SPREAD |
    |17| HBsAg阳性时间 | HBSAG_POSTIVE |
    |18| 性病接触史 | CONTACT_SPREAD |
    |19| 病例类型 | CASE_CATEGORY |
    |20| 所属区域 | REGION_TYPE |
    |21| 人群分类 | PEOPLE_CATEGORY |
    |22| 传染病 | DISEASES_TYPE |



    0 | 操作类型 | ACTION_TYPE

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|ACTION_TYPE|操作类型|10|CREATE|创建|10|
|ACTION_TYPE|操作类型|20|UPDATE|编辑|20|
|ACTION_TYPE|操作类型|30|REMOVE|删除|30|
|ACTION_TYPE|操作类型|40|QUERY|查询|40|
|ACTION_TYPE|操作类型|50|PRINT|打印|50|
|ACTION_TYPE|操作类型|60|EXPORT|导出|60|
|ACTION_TYPE|操作类型|70|AUDIT|审核|70|


    1 | 是否 | YES_NO

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|YES_NO|是否|1|YES|是|1|
|YES_NO|是否|0|NO|否|0|


    2 | 性别 | GENDER

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|GENDER|性别|1|MALE|男性|1|
|GENDER|性别|2|FEMALE|女性|2|


    3 | 时区 | GMT_8

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|GMT_8|时区|10|GMT_8|GMT_8|10|


    4 | 抗-HBc IgM1:1000检测结果 | ANTI_HBC_IGM

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|ANTI_HBC_IGM|抗-HBc IgM1:1000检测结果|1|YANG|阳性|1|
|ANTI_HBC_IGM|抗-HBc IgM1:1000检测结果|2|YIN|阴性|2|
|ANTI_HBC_IGM|抗-HBc IgM1:1000检测结果|3|WC|未测|3|


    5 | 年龄单位 | AGE_UNIT_CODE

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|AGE_UNIT_CODE|年龄单位|01|YEAR|岁|1|
|AGE_UNIT_CODE|年龄单位|02|MONTH|月|2|
|AGE_UNIT_CODE|年龄单位|03|DATE|天|3|


    6 | 用户角色状态 | USER_ROLE_STATUS

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|USER_ROLE_STATUS|用户角色状态|0|NORMAL|正常|0|
|USER_ROLE_STATUS|用户角色状态|10|BAN|禁用|10|
|USER_ROLE_STATUS|用户角色状态|20|EXPIRED|过期|20|
|USER_ROLE_STATUS|用户角色状态|999|OTHER|其他|20|


    7 | 病例诊断结果分类 | DIAGNOSIS_STATE

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|DIAGNOSIS_STATE|病例诊断结果分类|1|LCZDBL|临床诊断病例|1|
|DIAGNOSIS_STATE|病例诊断结果分类|2|QZBL|确诊病例|2|
|DIAGNOSIS_STATE|病例诊断结果分类|3|YSBL|疑似病例|3|
|DIAGNOSIS_STATE|病例诊断结果分类|4|BYXDZ|病原携带者|4|
|DIAGNOSIS_STATE|病例诊断结果分类|5|YXJC|阳性检测|5|
|DIAGNOSIS_STATE|病例诊断结果分类|6|ABLLGBL|埃博拉留观病例|6|


    8 | 教育程度 | EDUCATION_LEVEL

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|EDUCATION_LEVEL|教育程度|1|WM|文盲|1|
|EDUCATION_LEVEL|教育程度|2|XX|小学|2|
|EDUCATION_LEVEL|教育程度|3|CZ|初中|3|
|EDUCATION_LEVEL|教育程度|4|GZ|高中或中专|4|
|EDUCATION_LEVEL|教育程度|5|DZ|大专及以上|5|


    9 | 肝穿检测结果 | HBSAG_CHANGE

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|HBSAG_CHANGE|肝穿检测结果|1|YES|是|1|
|HBSAG_CHANGE|肝穿检测结果|2|NO|否|2|
|HBSAG_CHANGE|肝穿检测结果|3|UNTESTED|未测|3|


    10 | 证件类型 | IDCARD_TYPE

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|IDCARD_TYPE|证件类型|1|SFZ|身份证|1|
|IDCARD_TYPE|证件类型|3|HZ|护照|3|
|IDCARD_TYPE|证件类型|4|JGZ|军官证|4|
|IDCARD_TYPE|证件类型|6|GATXZ|港澳通行证|6|
|IDCARD_TYPE|证件类型|7|TWTXZ|台湾通行证|7|
|IDCARD_TYPE|证件类型|99|OTHER|其他法定有效证件|99|


    11 | 实验室检测结论 | LABORATORY_CONCLUSION

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|LABORATORY_CONCLUSION|实验室检测结论|1|QRJG|确认结果阳性|1|
|LABORATORY_CONCLUSION|实验室检测结论|2|TDCL|替代策略检测阳性|2|
|LABORATORY_CONCLUSION|实验室检测结论|3|HSJY|核酸检测阳性|3|


    12 | 肝穿检测结果 | HBSAG_LIVER

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|HBSAG_LIVER|肝穿检测结果|1|JX|急性病变|1|
|HBSAG_LIVER|肝穿检测结果|2|MX|慢性病变|2|
|HBSAG_LIVER|肝穿检测结果|3|UNTESTED|未测|3|


    13 | 婚姻状况 | MARITAL_STATUS

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|MARITAL_STATUS|婚姻状况|1|WH|未婚|1|
|MARITAL_STATUS|婚姻状况|2|YH|已婚或有配偶|2|
|MARITAL_STATUS|婚姻状况|3|LY|离异或丧偶|3|
|MARITAL_STATUS|婚姻状况|4|BX|不详|4|


    14 | 有无 | HAS_OR_NO

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|HAS_OR_NO|有无|1|HAS|有|1|
|HAS_OR_NO|有无|2|NONE|无|2|
|HAS_OR_NO|有无|3|BX|不详|3|


    15 | 样本来源 | FOUND_METHOD

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|FOUND_METHOD|样本来源|1|SQJC|术前检测|1|
|FOUND_METHOD|样本来源|2|SXQJC|受血(制品)前检测|2|
|FOUND_METHOD|样本来源|3|XBMZ|性病门诊|3|
|FOUND_METHOD|样本来源|4|QTJZZJC|其他就诊者检测|4|
|FOUND_METHOD|样本来源|5|HQJC|婚前检查(含涉外婚姻)|5|
|FOUND_METHOD|样本来源|6|YCQJC|孕产期检查|6|
|FOUND_METHOD|样本来源|7|JCZX|检测咨询|7|
|FOUND_METHOD|样本来源|8|YXZPO|阳性者配偶或性伴检测|8|
|FOUND_METHOD|样本来源|9|NXYXZZN|女性阳性者子女检测|9|
|FOUND_METHOD|样本来源|10|ZYBL|职业暴露检测|10|
|FOUND_METHOD|样本来源|11|YLCS|娱乐场所人员体检|11|
|FOUND_METHOD|样本来源|12|YCGX|有偿供血(浆)人员检测|12|
|FOUND_METHOD|样本来源|13|WCXX|无偿献血人员检测|13|
|FOUND_METHOD|样本来源|14|CRJRY|出入境人员体检|14|
|FOUND_METHOD|样本来源|15|XBTJ|新兵体检|15|
|FOUND_METHOD|样本来源|16|QZJD|强制&#x2F;劳教戒毒人员检测|16|
|FOUND_METHOD|样本来源|17|FJS|妇教所&#x2F;女劳收教人员检测|17|
|FOUND_METHOD|样本来源|18|QTJY|其他羁押人员体检|18|
|FOUND_METHOD|样本来源|19|ZTDC|专题调查|19|
|FOUND_METHOD|样本来源|20|OTHER|其他|20|


    16 | 感染途径 | BLOOD_SPREAD

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|BLOOD_SPREAD|感染途径|1|ZSDP|注射毒品|1|
|BLOOD_SPREAD|感染途径|2|YXCB|异性传播|2|
|BLOOD_SPREAD|感染途径|3|TXCB|同性传播|3|
|BLOOD_SPREAD|感染途径|4|XJC|性接触 + 注射毒品|4|
|BLOOD_SPREAD|感染途径|5|CX|采血(浆)|5|
|BLOOD_SPREAD|感染途径|6|SX|输血&#x2F;血制品|6|
|BLOOD_SPREAD|感染途径|7|MYCB|母婴传播|7|
|BLOOD_SPREAD|感染途径|8|ZYBL|职业暴露|8|
|BLOOD_SPREAD|感染途径|9|BX|不详|9|
|BLOOD_SPREAD|感染途径|10|OTHER|其他|10|


    17 | HBsAg阳性时间 | HBSAG_POSTIVE

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|HBSAG_POSTIVE|HBsAg阳性时间|1|GT6MONTH|&gt;6个月|1|
|HBSAG_POSTIVE|HBsAg阳性时间|2|LT6MONTH|6个月内由阴性转为阳性|2|
|HBSAG_POSTIVE|HBsAg阳性时间|3|BX|既往未检测或结果不详|3|


    18 | 性病接触史 | CONTACT_SPREAD

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|CONTACT_SPREAD|性病接触史|1|ZSDP|注射毒品史|1|
|CONTACT_SPREAD|性病接触史|2|FHYX|非婚异性性接触史|2|
|CONTACT_SPREAD|性病接触史|3|PEXB|配偶&#x2F;固定性伴阳性|3|
|CONTACT_SPREAD|性病接触史|4|NNXXW|男男性行为史|4|
|CONTACT_SPREAD|性病接触史|5|XX|献血（浆）史|5|
|CONTACT_SPREAD|性病接触史|6|SX|输血&#x2F;血制品史|6|
|CONTACT_SPREAD|性病接触史|7|MQYX|母亲阳性|7|
|CONTACT_SPREAD|性病接触史|8|ZYBL|职业暴露史|8|
|CONTACT_SPREAD|性病接触史|9|SSS|手术史|9|
|CONTACT_SPREAD|性病接触史|10|BX|不详|10|
|CONTACT_SPREAD|性病接触史|11|OTHER|其他|11|


    19 | 病例类型 | CASE_CATEGORY

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|CASE_CATEGORY|病例类型|0|WFX|未分型|0|
|CASE_CATEGORY|病例类型|1|JX|急性|1|
|CASE_CATEGORY|病例类型|2|MX|慢性|2|


    20 | 所属区域 | REGION_TYPE

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|REGION_TYPE|所属区域|1|BXQ|本县区|1|
|REGION_TYPE|所属区域|2|BSQTXQ|本市其他县区|2|
|REGION_TYPE|所属区域|3|BSQTDS|本省其它地市|3|
|REGION_TYPE|所属区域|4|QTS|其他省|4|
|REGION_TYPE|所属区域|5|GAT|港澳台|5|
|REGION_TYPE|所属区域|6|WJ|外籍|6|


    21 | 人群分类 | PEOPLE_CATEGORY

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|PEOPLE_CATEGORY|人群分类|1|YTET|幼托儿童|1|
|PEOPLE_CATEGORY|人群分类|2|SJET|散居儿童|2|
|PEOPLE_CATEGORY|人群分类|3|XS|学生|3|
|PEOPLE_CATEGORY|人群分类|4|JS|教师|4|
|PEOPLE_CATEGORY|人群分类|5|BYY|保育员及保姆|5|
|PEOPLE_CATEGORY|人群分类|6|CYSPY|餐饮食品业|6|
|PEOPLE_CATEGORY|人群分类|7|GGCSFYW|公共场所服务员|7|
|PEOPLE_CATEGORY|人群分类|8|SYFW|商业服务|8|
|PEOPLE_CATEGORY|人群分类|9|YWRY|医务人员|9|
|PEOPLE_CATEGORY|人群分类|16|GR|工人|16|
|PEOPLE_CATEGORY|人群分类|17|MG|民工|17|
|PEOPLE_CATEGORY|人群分类|18|NM|农民|18|
|PEOPLE_CATEGORY|人群分类|19|MM|牧民|19|
|PEOPLE_CATEGORY|人群分类|20|YM|渔(船)民|20|
|PEOPLE_CATEGORY|人群分类|21|HYJCTJSY|海员及长途驾驶员|21|
|PEOPLE_CATEGORY|人群分类|22|GBZY|干部职员|22|
|PEOPLE_CATEGORY|人群分类|23|LTRY|离退人员|23|
|PEOPLE_CATEGORY|人群分类|24|JWJDY|家务及待业|24|
|PEOPLE_CATEGORY|人群分类|28|BX|不详|28|
|PEOPLE_CATEGORY|人群分类|29|OTHER|其他|29|


    22 | 传染病 | DISEASES_TYPE

| Category | categoryName | itemValue | itemKey | itemName | itemSeq |
|----------------------|--------------|-----------|---------|------|---------|
|DISEASES_TYPE|传染病|2|Plague|鼠疫|2|
|DISEASES_TYPE|传染病|3|Cholera|霍乱|3|
|DISEASES_TYPE|传染病|11|BacillaryDysentery|细菌性痢疾|11|
|DISEASES_TYPE|传染病|12|AmebicDysentery|阿米巴性痢疾|12|
|DISEASES_TYPE|传染病|13|TyphoidFever|伤寒|13|
|DISEASES_TYPE|传染病|14|AIDS|艾滋病|14|
|DISEASES_TYPE|传染病|15|HIV|HIV|15|
|DISEASES_TYPE|传染病|16|Gonorrhea|淋病|16|
|DISEASES_TYPE|传染病|18|SyphilisI|Ⅰ期梅毒|18|
|DISEASES_TYPE|传染病|19|SyphilisII|Ⅱ期梅毒|19|
|DISEASES_TYPE|传染病|21|Poliomyelitis|脊灰|21|
|DISEASES_TYPE|传染病|22|measles|麻疹|22|
|DISEASES_TYPE|传染病|23|Pertussis|百日咳|23|
|DISEASES_TYPE|传染病|24|Diphtheria|白喉|24|
|DISEASES_TYPE|传染病|25|epidemicCerebrospinalMeningitis|流脑|25|
|DISEASES_TYPE|传染病|26|ScarletFever|猩红热|26|
|DISEASES_TYPE|传染病|27|epidemicHemorrhagicFeverEhf|出血热|27|
|DISEASES_TYPE|传染病|28|Rabies|狂犬病|28|
|DISEASES_TYPE|传染病|29|Leptospirosis|钩体病|29|
|DISEASES_TYPE|传染病|30|Brucellosis|布病|30|
|DISEASES_TYPE|传染病|40|NeonatalTetanus|新生儿破伤风|40|
|DISEASES_TYPE|传染病|45|SARS|传染性非典|45|
|DISEASES_TYPE|传染病|120|EpidemicEndemicTyphus|斑疹伤寒|120|
|DISEASES_TYPE|传染病|121|EpidemicEncephalitisB|乙脑|121|
|DISEASES_TYPE|传染病|122|KalaAzar|黑热病|122|
|DISEASES_TYPE|传染病|124|tertianAgue|间日疟|124|
|DISEASES_TYPE|传染病|125|MalignantMalaria|恶性疟|125|
|DISEASES_TYPE|传染病|126|OtherMalaria|疟疾（未分型）|126|
|DISEASES_TYPE|传染病|127|DengueFever|登革热|127|
|DISEASES_TYPE|传染病|130|Tu|涂（+）|130|
|DISEASES_TYPE|传染病|131|Jun|菌（-）|131|
|DISEASES_TYPE|传染病|132|Wei|未痰检|132|
|DISEASES_TYPE|传染病|133|SARS_SUSPECTED|非典（疑似）|133|
|DISEASES_TYPE|传染病|134|Jin|仅培阳|134|
|DISEASES_TYPE|传染病|135|Schistosomiasis|血吸虫病|135|
|DISEASES_TYPE|传染病|136|Filariasis|丝虫病|136|
|DISEASES_TYPE|传染病|137|Echinococcosis|包虫病|137|
|DISEASES_TYPE|传染病|138|Lepriasis|麻风病|138|
|DISEASES_TYPE|传染病|139|Grippe|流行性感冒|139|
|DISEASES_TYPE|传染病|140|Mumps|流行性腮腺炎|140|
|DISEASES_TYPE|传染病|141|Rubella|风疹|141|
|DISEASES_TYPE|传染病|142|AcuteHemorrhagicConjunctivitis|急性出血性结膜炎|142|
|DISEASES_TYPE|传染病|143|InfectiousDiarrhea|其它感染性腹泻病|143|
|DISEASES_TYPE|传染病|144|NGU|非淋菌性尿道炎|144|
|DISEASES_TYPE|传染病|145|Condylomayloma|尖锐湿疣|145|
|DISEASES_TYPE|传染病|146|OtherDisease|其它疾病|146|
|DISEASES_TYPE|传染病|147|HSV|生殖器疱疹|147|
|DISEASES_TYPE|传染病|160|UnknownCausePneumonia|不明原因肺炎|160|
|DISEASES_TYPE|传染病|197|Jie|结核性胸膜炎|197|
|DISEASES_TYPE|传染病|198|HFMD|手足口病|198|
|DISEASES_TYPE|传染病|199|UnknownCause|不明原因|199|
|DISEASES_TYPE|传染病|200|SyphilisIII|III期梅毒|200|
|DISEASES_TYPE|传染病|201|SyphilisFetal|胎传梅毒|201|
|DISEASES_TYPE|传染病|202|AvianInfluenzaVirus|人感染高致病性禽流感|202|
|DISEASES_TYPE|传染病|203|LungAnthrax|肺炭疽|203|
|DISEASES_TYPE|传染病|204|DermaAnthrax|皮肤炭疽|204|
|DISEASES_TYPE|传染病|205|OtherAnthrax|炭疽（未分型）|205|
|DISEASES_TYPE|传染病|206|Other|其它|206|
|DISEASES_TYPE|传染病|220|ParatyphoidFever|副伤寒|220|
|DISEASES_TYPE|传染病|240|HepatitisA|甲肝|240|
|DISEASES_TYPE|传染病|241|HepatitisB|乙肝|241|
|DISEASES_TYPE|传染病|318|HepatitisC|丙肝|318|
|DISEASES_TYPE|传染病|319|HepatitisE|戊肝|319|
|DISEASES_TYPE|传染病|320|Hepatitis|肝炎（未分型）|320|
|DISEASES_TYPE|传染病|321|SyphilisRecessive|隐性梅毒|321|
|DISEASES_TYPE|传染病|323|Chickenpox|水痘|323|
|DISEASES_TYPE|传染病|324|ForestEncephalitis|森林脑炎|324|
|DISEASES_TYPE|传染病|346|HumanInfectionWithStreptococcusSuis|人感染猪链球菌|346|
|DISEASES_TYPE|传染病|347|GenitalChlamydialInfections|生殖道沙眼衣原体感染|347|
|DISEASES_TYPE|传染病|348|H1N1|甲型H1N1流感|348|
|DISEASES_TYPE|传染病|349|AFP|AFP|349|
|DISEASES_TYPE|传染病|350|H7N9|人感染H7N9禽流感|350|
|DISEASES_TYPE|传染病|366|Clonorchiasis|肝吸虫病|366|
|DISEASES_TYPE|传染病|367|TsutsugamushiDisease|恙虫病|367|
|DISEASES_TYPE|传染病|368|HGA|人粒细胞无形体病|368|
|DISEASES_TYPE|传染病|369|SFTS|发热伴血小板减少综合征|369|
|DISEASES_TYPE|传染病|370|H7N9_OTHER|人感染H7N9禽流感(其它)|370|
|DISEASES_TYPE|传染病|371|MERS|中东呼吸综合征（MERS）|371|
|DISEASES_TYPE|传染病|372|EBHF|埃博拉出血热|372|
|DISEASES_TYPE|传染病|373|HepatitisD|丁肝|373|
|DISEASES_TYPE|传染病|374|ZhaikaVirusDisease|寨卡病毒病|374|
|DISEASES_TYPE|传染病|375|RfpTB|肺结核利福平耐药|375|
|DISEASES_TYPE|传染病|376|EtiologicalPositiveTB|肺结核病原学阳性|376|
|DISEASES_TYPE|传染病|377|EtiologicalNegativeTB|肺结核病原学阴性|377|
|DISEASES_TYPE|传染病|378|NoEtiologicalTB|肺结核无病原学结果|378|
|DISEASES_TYPE|传染病|379|NewPneumonia|新型冠状病毒肺炎|379|
|DISEASES_TYPE|传染病|601|Psychogeny|严重精神障碍|601|






