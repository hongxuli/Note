### lazyLoad vs eagerLoad


``` JS
<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePost;
use App\Models\BlogPost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    //
    public function index()
    {

        DB::connection()->enableQueryLog();
        // lazyload
        // $posts = BlogPost::all();


        // eagerLoad
        $posts = BlogPost::with('comments')->get();
        foreach ($posts as $post ) {
            foreach ($post->comments as $comment ) {
                echo $comment->content;
            }
        }


        dd(DB::getQueryLog());


        return view('post.index', ['posts' => BlogPost::all()]);
    }

    public function show($id)
    {
        return view('post.show',['post'=> BlogPost::findOrFail($id)]);
    }

    public function create()
    {
        return view('post.create');
    }

    public function store(StorePost $request)
    {

        // $request->validate([
        //     'title' => 'bail|required|min:5|max:100',
        //     'content' => 'required|min:10'
        // ]);
        $validated = $request->validated();

        // $post = new BlogPost();
        // // $post->title = $request->input('title');
        // // $post->content = $request->input('content');
        // $post->title = $validated['title'];
        // $post->content = $validated['content'];

        $post = BlogPost::create($validated);

        // $post->save();

        $request->session()->flash('status','The blog post was created');
        return redirect()->route('post.show',['post'=> $post->id]);
    }

    public function edit($id)
    {
        return view('post.edit',['post'=>BlogPost::findOrFail($id)]);
    }

    public function update(StorePost $request, $id)
    {
        $post = BlogPost::findOrFail($id);
        $validated = $request->validated();
        $post->fill($validated);
        $post->save();

        $request->session()->flash('status','Blog post was updated');
        return redirect()->route('post.show',['post'=>$post->id]);
    }

    public function destroy($id)
    {
        $post = BlogPost::findOrFail($id);
        $post->delete();

        session()->flash('status','Blog has been deleted');
        return redirect()->route('post.index');
    }
}

```

**result:** 
``` JS
//lazyLoad 
array:3 [▼
  0 => array:3 [▼
    "query" => "select * from `blog_posts`"
    "bindings" => []
    "time" => 6.39
  ]
  1 => array:3 [▼
    "query" => "select * from `comments` where `comments`.`blog_post_id` = ? and `comments`.`blog_post_id` is not null"
    "bindings" => array:1 [▶]
    "time" => 1.57
  ]
  2 => array:3 [▼
    "query" => "select * from `comments` where `comments`.`blog_post_id` = ? and `comments`.`blog_post_id` is not null"
    "bindings" => array:1 [▶]
    "time" => 1.08
  ]
]

// eagerLoad 
array:2 [▼
  0 => array:3 [▼
    "query" => "select * from `blog_posts`"
    "bindings" => []
    "time" => 10.12
  ]
  1 => array:3 [▼
    "query" => "select * from `comments` where `comments`.`blog_post_id` in (1, 2)"
    "bindings" => []
    "time" => 1.6
  ]
]
```


