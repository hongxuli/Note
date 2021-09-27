## Form

``` JS
<form method="POST" action="{{route('post.store')}}">
    @csrf
    <div><input class="form-control" type="text" name="title"></div>
     @error('title')
    <div>{{$message}}</div>
    @enderror
    <div><textarea name="content" id="" cols="30" rows="10"></textarea></div>
    @if($errors->any())
    <div>
        <ul>
            @foreach($errors->all() as $error)
            <li>{{$error}}</li>
            @endforeach
        </ul>
    </div>
    @endif
    <div><input class="form-control" type="submit" name="Create"></div>
</form>
```


### validate 

1. validate in controller 
    ``` JS
   $request->validate([
            'title' => 'bail|required|min:5|max:100',
            'content' => 'required|min:10'
        ]);
    ```
2. in request 
php artisan make:request StorePost 
``` JS
public function rules()
    {
        return [
            'title' => 'bail|required|min:5|max:100',
            'content' => 'required|min:10'
        ];
    }
```

### keep old value 

if the feild is not valid, it will not clear the content user input

old('name','default value')

``` JS
<div><input class="form-control" type="text" name="title" value="{{old('title')}}"></div>
```


### mass assignment 

inside Model class 

``` JS
class BlogPost extends Model
{
    // mass assignment 
    protected $fillable = ['title', 'content'];

    use HasFactory;
}
```

inside controller

``` JS
$post = BlogPost::make();
$post->save();

// specify either a fillable or guarded property on your model class. 
$validated = $request->validated();
$post2 = BlogPost::create($validated);

// If you already have a model instance, you may use the fill method to populate it with an array of attributes:
$post2->fill(['title' => 'Amsterdam to Frankfurt']);
```

