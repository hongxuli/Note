
## install 
启动homestead

cd ~/Homestead 

vagrant command 
``` JS
#启动 如果加上 --provision 选项那么添加的新站点会发布到虚拟机上。
vagrant up
#关闭
vagrant halt
#通过 SSH 登录 vagrant（需要先启动 vagrant）
vagrant ssh
#查看目前安装的box列表
vagrant box list
#删除box镜像
vagrant box remove laravel/homestead
#删除虚拟机
vagrant destroy
#查看当前 Homestead 虚拟机的状态。
vagrant status
```



php artisan serve



how to config homestead and laravel on mac
https://medium.com/fabcoding/set-up-laravel-homestead-on-mac-step-by-step-271a3489ff1


## install specific verision / upgrading or downgrading laravel 

1. in composer.json change version 
``` JS
"require": {
   "php": "^7.2",
   "laravel/framework": "5.8.*",
},
```
2. delete vendor and composer.lock 
3. composer install 



## database connection 

The usual credentials/info you need:

IP address 192.168.10.10 (Check your Homestead Folder>Homestead.yaml)
Port: 3306
User: homestead (all lowercase)
Pw: secret


# in .env file config
DB_CONNECTION=mysql
DB_HOST=192.168.10.10
DB_PORT=3306
DB_DATABASE=khan   // create a database or connect to a database name 
DB_USERNAME=homestead
DB_PASSWORD=secret



## if port has been taken 

List processes with php in it
ps -ef | grep php

Then kill the process
kill -9 9347