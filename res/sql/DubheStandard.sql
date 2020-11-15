    CREATE TABLE s_code_item_66b056ff_3eaa_4015_9088_63c0a5dd7620 AS (   SELECT *   FROM s_code_item   ) ;
    TRUNCATE table s_code_item;

    INSERT INTO s_code_item
        (  `code_type`, `code_type_name`, `code_type_seq`, `code_item`, `code_item_key`, `code_item_name`, `code_item_seq`, `code_effect_start_date`,       `code_effect_end_date`,      `code_desc`)
    VALUES
        ( 'CUSTOMER_TYPE',       '客户类型',         0,               '100',          'C',           '铅顾客',             100,              '2018-01-01 00:00:00',             '2999-12-31 00:00:00',                  '') ,
        ( 'CUSTOMER_TYPE',       '客户类型',         0,               '200',          'B',           '铁顾客',             200,              '2018-01-01 00:00:00',             '2999-12-31 00:00:00',                  '') ,
        ( 'CUSTOMER_TYPE',       '客户类型',         0,               '400',          'A',           '黄金顾客',             400,              '2018-01-01 00:00:00',             '2999-12-31 00:00:00',                  '') ,
        ( 'CUSTOMER_TYPE',       '客户类型',         0,               '800',          'S',           '白金顾客',             800,              '2018-01-01 00:00:00',             '2999-12-31 00:00:00',                  '') 
;