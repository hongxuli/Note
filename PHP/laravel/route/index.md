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


