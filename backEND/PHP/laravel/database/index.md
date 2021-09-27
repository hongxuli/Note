## create database and migration

php artisan make:mode ModelName -m 

-m : migration



## update table 
quick way: 

php artisan migrate:refresh --path=/database/migrations/your_file_name.php

right way:

1. php artisan make:migration add_paid_to_users_table --table=users
2. You then need to use the Schema::table() method (as you're accessing an existing table, not creating a new one). And you can add a column like this:
``` JS
public function up()
{
    Schema::table('users', function($table) {
        $table->integer('paid');
    });
}
and don't forget to add the rollback option:

public function down()
{
    Schema::table('users', function($table) {
        $table->dropColumn('paid');
    });
}
```


3. Then you can run your migrations:
    php artisan migrate
4. In case you want to undo the last migration for any reason, run this command :
    php artisan migrate:rollback
