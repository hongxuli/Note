# 3 ways to convert datatype
- type 'String'
- 'String' ::type
- CAST ('String' AS type)


# Get currentTime

1. current_timestamp
2. current_time 

```JS
select current_timestamp as CST, timezone('America/New_York',current_timestamp) as NYT

//result: 
              cst              |            nyt
-------------------------------+----------------------------
 2018-01-11 16:58:08.610978+08 | 2018-01-11 03:58:08.610978
```


# Timestamp 类型

PostgreSQL 有两种时间类型： 

1. TIMESTAMP(不带时区)
  
  如果修改了服务器的时区，里面的值也不会变

2. TIMESTAMPZ(带时区)

  在插入时会自动转成UTC，当查询时会自动转成服务器，用户或者当前连接所在的时区

