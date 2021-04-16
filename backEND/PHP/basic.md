### output

- echo

`output one or more string`

- print

`only one arg and always return 1`

- print_r()

`only return result `

```
print_r($obj)
Object
(
    [color] => white
)

print_r($arr)
Object
Array
(
    [0] => 1
    [1] => 2
    [2] => 3
    [3] => 4
)
```

- var_dump()

`return type and value `

- echo PHP_EOL; // change line

### primitives

- string
- integer
- float
- boolean
- array
- object
- null

### compare

1. ==

compare value only

2. ===

compare both value and type

### '' ""

'' wont parse variable
"" parse variable

```JS
"'$name'" // 'Bruce'
"{$name} hello world" // Bruce hello world

// add space or , after variable in ""
"$name,hello world" // Bruce,hello world
"$name hello world" //  Bruce hello world

```

### .

. is like + in js to contact string

### change type in map
type is in front of the variable
```JS
array_map(function($lesson){
    return [
        'title'=>$lesson['title'],
        'content'=>$lesson['body'],
        'is_free' => (boolean) $lesson['free']
    ]
},$lessons->toArray())
```


### array traversal 

- foreach

``` JS
foreach (array_expression as $value)
    statement
foreach (array_expression as $key => $value)
    statement
<?php
$arr = array(1, 2, 3, 4);
// 在value前加 &来修改   引用赋值 不是拷贝值
foreach ($arr as &$value) {
    $value = $value * 2;
}
// $arr is now array(2, 4, 6, 8)
unset($value); // 最后取消掉引用
?>
```

- array_map 
``` JS
  $students = array(
        array('name' => '张三', 'age' => 21),
        array('name' => '赵四', 'age' => 22),
        array('name' => '王五', 'age' => 21)
    );
    $prefix = array(
        '尼古拉丁',
        '尼古拉斯',
        '史上最帅',
    );
    $score = array(
        9,
        8,
        10,
    );
  $students = array_map(function ($value, $key) use ($prefix) {
        $value['name'] = $prefix[$key].'·'.$value['name'];
        return $value;
    }, $students, array_keys($students));

```
array_map 可以接受多个数组，并将多个数组的值依次作为回调函数的 第一个、第二个……参数传入，由于传入单数组不会回调数组的key，所以需要使用 array_keys($students) 提取数组的键作为回调的第二个参数。


- array_walk 
``` JS
 array_walk($students, function(&$value, $key, $userdata) {
        $value['name'] = $userdata[$key].'·'.$value['name'];
    }, $prefix);
```

### array concat 



### use in  anonoymous funtion 
inherit variable from parents scope
``` JS
<?php
$msg = [1,2,3];
$func = function()use($msg){
    print_r($msg);
};  

$func();
?>

运行输出
Array
(
    [0] => 1
    [1] => 2
    [2] => 3
)
```
if use &$msg (refernce), the position of the decleartion of the variable does not matter, vise versa.  

``` JS

<?php
class C{
    protected $_num = 0;

    public function mkFunc(){
        $func = function(){
            echo $this->_num++, "\n";
        };

        return $func;
    }

    public function get(){
        echo $this->_num,"\n";
    }
}

$obj = new C();
$func = $obj->mkFunc();
$func();

$obj->get();
?>

运行结果
0
1
```
可见匿名函数里的this就是指当前对象，不需要使用use就可以直接找到。

``` JS
public function mkFunc(){
    //唯一改动是此处加了use
    $func = function()use($this){
        echo $this->_num++, "\n";
    };

    return $func;
}

运行输出
PHP Fatal error:  Cannot use $this as lexical variable 

// need to use self 
public function mkFunc(){
    $self = $this;
    $func = function()use($self){
        echo $this->_num++, "\n";
    };

    return $func;
}

运行结果
0
1
```
