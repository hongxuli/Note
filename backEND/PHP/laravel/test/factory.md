In Laravel 8.x release notes:

Eloquent model factories have been entirely re-written as class based factories and improved to have first-class relationship support.

Global factory() function is removed as of Laravel 8. Instead, you should now use model factory classes.

Create a factory:
`php artisan make:factory ItemFactory --model=Item`
Make sure that Illuminate\Database\Eloquent\Factories\HasFactory trait is imported in your model:
``` JS

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    // ...
}
```

Use it like this:
``` JS

$item = Item::factory()->make(); // Create a single App\Models\Item instance

// or

$items = Item::factory()->count(3)->make(); // Create three App\Models\Item instances
```

Use create method to persist them to the database:

``` JS
$item = Item::factory()->create(); // Create a single App\Models\Item instance and persist to the database

// or

$items = Item::factory()->count(3)->create(); // Create three App\Models\Item instances and persist to the database
```


Being said that, if you still want to provide support for the previous generation of model factories within Laravel 8.x, you can use laravel/legacy-factories package.