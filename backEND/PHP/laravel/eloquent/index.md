## Insert 

1. new Model    $model->save()
2. Model::create()


## update 

single:
``` JS
$flight = Flight:find(1);
$flight->name = 'new name';
$flight->save()
```

mass update:

The update method expects an array of column and value pairs representing the columns that should be updated.
``` JS
Flight::where('active',1)
->where('destination','San Diego')
->update(['delayed' => 1])
```

## upserts

In the example below, if a flight exists with a departure location of Oakland and a destination location of San Diego, its price and discounted columns will be updated. If no such flight exists, a new flight will be created which has the attributes resulting from merging the first argument array with the second argument array:

``` JS
$flight = Flight::updateOrCreate(
    ['departure' => 'Oakland', 'destination' => 'San Diego'],
    ['price' => 99, 'discounted' => 1]
);
```

If you would like to perform multiple "upserts" in a single query, then you should use the upsert method instead. 
1. The method's first argument consists of **the values to insert or update**
2.  while the second argument lists the column(s) that **uniquely identify records** within the associated table.
3.  The method's third and final argument is an array of **the columns that should be updated** if a matching record already exists in the database. 
The upsert method will automatically set the created_at and updated_at timestamps if timestamps are enabled on the model:

``` JS
Flight::upsert([
    ['departure' => 'Oakland', 'destination' => 'San Diego', 'price' => 99],
    ['departure' => 'Chicago', 'destination' => 'New York', 'price' => 150]
], ['departure', 'destination'], ['price']);
```

## delete

``` JS
$flight = Flight::find(1);

$flight->delete();
```

or

``` JS
Flight::destroy(1);

Flight::destroy(1, 2, 3);

Flight::destroy([1, 2, 3]);

Flight::destroy(collect([1, 2, 3]));
```

or 

``` JS
$deletedRows = Flight::where('active', 0)->delete();
```


