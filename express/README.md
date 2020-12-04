https://blog.csdn.net/yuanfangyoushan/article/details/96842210
https://itbilu.com/nodejs/npm/41mRdls_Z.html
https://www.javascriptcn.com/read-66963.html

[sequelize-auto Github](https://github.com/sequelize/sequelize-auto)

```cmd
cnpm install -g nodemon
```

-h 数据库的IP地址 
-d 数据库名 
-u 用户名 
-x 密码 
-p 端口 
-t 表名
-e 数据库类型
-a  json定义文件路径，可以追加一些自定义配置，如{"timestamps": false}

```cmd
sequelize-auto -h 219.216.80.18 -d BSdataTest -u postgres -x 616616 -p 5432 -e postgres
```

```node
var exec = require('child_process').exec;
function execute(cmd){
    exec(cmd, function(error, stdout, stderr) {
        if(error){
            console.error(error);
        }
        else{
            console.log("success");
        }
    });
}
execute('sequelize-auto -h 219.216.80.18 -d BSdataTest -u postgres -x 616616 -p 5432 -e postgres -o "./temp"');
```
