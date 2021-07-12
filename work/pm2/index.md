## debug API 
in ecosystem file

``` JS
 apps: [
    {
      name: 'ec2',
      script: 'ec2.js',
      instances: 2,
      node_args : "--inspect=1235",  // add --inspect 
      exec_mode: 'cluster',
      ignoreWatch : ['node_modules', 'core*', '.*', 'ecosystem*', 'package*', 'ec2-web-socket.js', 'crontab', 'crontab-dev'],
      watch: true,
      .....
```
