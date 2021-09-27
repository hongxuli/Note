## route constarins

``` JS
// web.php 
// where is constrain for route, which accept an array 
Route::get('/post/{id}', function($id){
    return 'Blog post ' . $id;
})->where([
    'id' => '[0-9]+'
]);
```

``` JS
// RouteServiceProvider.php
    public function boot()
    {
        $this->configureRateLimiting();

        $this->routes(function () {
            Route::prefix('api')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('routes/api.php'));

            Route::middleware('web')
                ->namespace($this->namespace)
                ->group(base_path('routes/web.php'));
        });

            // constarins
            Route::pattern('id','[0-9]+');
    }

```


## resource 
``` JS
+--------+-----------+------------------+-----------------+---------------------------------------------+------------+
| Domain |Form Method| URI   route      | Name            | Action  controller function                 | Middleware |
+--------+-----------+------------------+-----------------+---------------------------------------------+------------+

+--------+-----------+------------------+-----------------+---------------------------------------------+------------+
| Domain | Method    | URI              | Name            | Action                                      | Middleware |
+--------+-----------+------------------+-----------------+---------------------------------------------+------------+
|        | GET|HEAD  | /                | home.index      | App\Http\Controllers\HomeController@home    | web        |
|        | GET|HEAD  | post             | post.index      | App\Http\Controllers\PostController@index   | web        |
|        | POST      | post             | post.store      | App\Http\Controllers\PostController@store   | web        |
|        | GET|HEAD  | post/create      | post.create     | App\Http\Controllers\PostController@create  | web        |
|        | GET|HEAD  | post/{post}      | post.show       | App\Http\Controllers\PostController@show    | web        |
|        | PUT|PATCH | post/{post}      | post.update     | App\Http\Controllers\PostController@update  | web        |
|        | DELETE    | post/{post}      | post.destroy    | App\Http\Controllers\PostController@destroy | web        |
|        | GET|HEAD  | post/{post}/edit | post.edit       | App\Http\Controllers\PostController@edit    | web        |
+--------+-----------+------------------+-----------------+---------------------------------------------+------------+
```
