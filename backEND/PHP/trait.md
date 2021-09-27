php从以前到现在一直都是单继承的语言，无法同时从两个基类中继承属性和方法，为了解决这个问题，php出了Trait这个特性

用法：通过在类中使用use 关键字，声明要组合的Trait名称，具体的Trait的声明使用Trait关键词，Trait不能实例化

如下代码实例:

<?php
trait Dog{
    public $name="dog";
    public function bark(){
        echo "This is dog";
    }
}
class Animal{
    public function eat(){
        echo "This is animal eat";
    }
}
class Cat extends Animal{
    use Dog;
    public function drive(){
        echo "This is cat drive";
    }
}
$cat = new Cat();
$cat->drive();
echo "<br/>";
$cat->eat();
echo "<br/>";
$cat->bark();
?>
将会如下输出

Paste_Image.png
再测试Trait、基类和本类对同名属性或方法的处理，如下代码
<?php
trait Dog{
    public $name="dog";
    public function drive(){
        echo "This is dog drive";
    }
    public function eat(){
        echo "This is dog eat";
    }
}

class Animal{
    public function drive(){
        echo "This is animal drive";
    }
    public function eat(){
        echo "This is animal eat";
    }
}

class Cat extends Animal{
    use Dog;
    public function drive(){
        echo "This is cat drive";
    }
}
$cat = new Cat();
$cat->drive();
echo "<br/>";
$cat->eat();

?>
如下显示

Paste_Image.png
所以：Trait中的方法会覆盖 基类中的同名方法，而本类会覆盖Trait中同名方法
注意点：当trait定义了属性后，类就不能定义同样名称的属性，否则会产生 fatal error，除非是设置成相同可见度、相同默认值。不过在php7之前，即使这样设置，还是会产生E_STRICT 的提醒

一个类可以组合多个Trait，通过逗号相隔，如下
use trait1,trait2

当不同的trait中，却有着同名的方法或属性，会产生冲突，可以使用insteadof或 as进行解决，insteadof 是进行替代，而as是给它取别名
如下实例：

<?php
trait trait1{
    public function eat(){
        echo "This is trait1 eat";
    }
    public function drive(){
        echo "This is trait1 drive";
    }
}
trait trait2{
    public function eat(){
        echo "This is trait2 eat";
    }
    public function drive(){
        echo "This is trait2 drive";
    }
}
class cat{
    use trait1,trait2{
        trait1::eat insteadof trait2;
        trait1::drive insteadof trait2;
    }
}
class dog{
    use trait1,trait2{
        trait1::eat insteadof trait2;
        trait1::drive insteadof trait2;
        trait2::eat as eaten;
        trait2::drive as driven;
    }
}
$cat = new cat();
$cat->eat();
echo "<br/>";
$cat->drive();
echo "<br/>";
echo "<br/>";
echo "<br/>";
$dog = new dog();
$dog->eat();
echo "<br/>";
$dog->drive();
echo "<br/>";
$dog->eaten();
echo "<br/>";
$dog->driven();
?>
输出如下

Paste_Image.png
as 还可以修改方法的访问控制
<?php
trait Animal{
    public function eat(){
        echo "This is Animal eat";
    }
}

class Dog{
    use Animal{
        eat as protected;
    }
}
class Cat{
    use Animal{
        Animal::eat as private eaten;
    }
}
$dog = new Dog();
$dog->eat();//报错，因为已经把eat改成了保护

$cat = new Cat();
$cat->eat();//正常运行，不会修改原先的访问控制
$cat->eaten();//报错，已经改成了私有的访问控制
?>
Trait也可以互相组合，还可以使用抽象方法，静态属性，静态方法等，实例如下

<?php
trait Cat{
    public function eat(){
        echo "This is Cat eat";
    }
}

trait Dog{
    use Cat;
    public function drive(){
        echo "This is Dog drive";
    }
    abstract public function getName();
    
    public function test(){
        static $num=0;
        $num++;
        echo $num;
    }
    
    public static function say(){
        echo "This is Dog say";
    }
}
class animal{
    use Dog;
    public function getName(){
        echo "This is animal name";
    }
}

$animal = new animal();
$animal->getName();
echo "<br/>";
$animal->eat();
echo "<br/>";
$animal->drive();
echo "<br/>";
$animal::say();
echo "<br/>";
$animal->test();
echo "<br/>";
$animal->test();
?>



https://www.jianshu.com/p/fc053b2d7fd1
