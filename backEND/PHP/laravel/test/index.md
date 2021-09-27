### command 
./vendor/bin/phpunit

### configuration
set variable for test 

phpunit.xml

need use php artisan config:clear to clear cache so config is work 


``` JS
// databse config
  'sqlite_testing' => [
            'driver' => 'sqlite',
            'database' => ':memory:'
        ],

//  phpunit.xml add test database
    <server name="DB_CONNECTION" value="sqlite_testing"/>
```


### create feature test 

php artisan make:test PostTest

``` JS
<?php

namespace Tests\Feature;

use App\Models\BlogPost;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PostTest extends TestCase
{

    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testNoBlogPostWhenNothingInDataBase()
    {

        $response = $this->get('/post');

        $response->assertSeeText('No posts found!');
        // $response->assertSeeText('hahaha');

    }

    public function testBolgPost()
    {
        // arrange
        $post = new BlogPost();
        $post->title = 'New title';
        $post->content = 'New content of the post';
        $post->save();

        //  act
        $response = $this->get('/post');

        // assert

        $response->assertSeeText('New title');


        $this->assertDatabaseHas('blog_posts',[
            'title' => 'New title'
        ]);
    }


    public function testStoreValid()
    {
        $params = [
            'title' =>  'valid title',
            'content' => 'valid contene at least 10 characters'
        ];

        $this->post('/post',$params)
                ->assertStatus(302)
                ->assertSessionHas('status');

        $this->assertEquals(session('status'), 'The blog post was created');
    }


    public function testStoreFailure()
    {
        $params = [
            'title' => 'x',
            'content' => 'x'
        ];

        $this->post('/post', $params)
                ->assertStatus(302)
                ->assertSessionHas('errors');
                // dd(session('errors'));
        $messeages = session('errors')->getMessages();
        // dd($messeage->getMessages());

        //         .....array:2 [
        // "title" => array:1 [
        //     0 => "The title must be at least 5 characters."
        // ]
        // "content" => array:1 [
        //     0 => "The content must be at least 10 characters."
        // ]
        // ]

        $this->assertEquals($messeages['title'][0], 'The title must be at least 5 characters.');

    }

    public function testUpdate()
    {
        // arrange
        $post = new BlogPost();
        $post->title = 'New title';
        $post->content = 'New content of the post';
        $post->save();

        // $this->assertDatabaseHas('blog_posts',$post->toArray());

        $params = [
            'title' =>  'updated title',
            'content' => 'updated contene at least 10 characters'
        ];

        $this->put("/post/{$post->id}",$params);

        // $this->assertEquals(session('status'),'Blog post was updated!');
        $this->assertDatabaseMissing('blog_posts', $post->toArray());
    }
}

```




