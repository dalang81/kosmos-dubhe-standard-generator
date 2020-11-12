    CREATE TABLE s_code_item_e4b4349d_8552_4b69_8919_d4872fded478 AS (   SELECT *   FROM s_code_item   ) ;
    TRUNCATE table s_code_item;

    INSERT INTO s_code_item
        (  `code_type`, `code_type_name`, `code_type_seq`, `code_item`, `code_item_key`, `code_item_name`, `code_item_seq`, `code_effect_start_date`,       `code_effect_end_date`,      `code_desc`)
    VALUES
        ( 'ACTION_TYPE',       '操作类型',         0,               '10',          'CREATE',           '创建',             1,              '2018-01-01 00:00:00',             '2999-12-31 00:00:00',                  '') ,
        ( 'ACTION_TYPE',       '操作类型',         0,               '20',          'UPDATE',           '编辑',             2,              '2018-01-01 00:00:00',             '2999-12-31 00:00:00',                  '') ,
        ( 'ACTION_TYPE',       '操作类型',         0,               '30',          'REMOVE',           '删除',             3,              '2018-01-01 00:00:00',             '2999-12-31 00:00:00',                  '') ,
        ( 'ACTION_TYPE',       '操作类型',         0,               '40',          'QUERY',           '查询',             4,              '2018-01-01 00:00:00',             '2999-12-31 00:00:00',                  '') ,
        ( 'ACTION_TYPE',       '操作类型',         0,               '50',          'REPORT',           '上报',             5,              '2018-01-01 00:00:00',             '2999-12-31 00:00:00',                  '') 
;