# one to one 

``` JS
$author = new Author();
$author->save();

$profile = new Profile();
$author->profile()->save(profile);


profile = new Profile();
$author = Author::create();
$profile->author()->associate($author)->save();

profile = new Profile();
$author = Author::create();
$profile->author_id = 4;
$profile->save();

```


# one to many 

``` JS
class Comment extends Model
{
    use HasFactory;

    // function name decides key name 
    // blogPost -> blog_post_id     post->post_id
    public function blogPost()
    {
        return $this->belongsTo('App\BlogPost');

        // or use second params define key name 
        // return $this->belongsTo('App\BlogPost','post_id');

    }
}

```
