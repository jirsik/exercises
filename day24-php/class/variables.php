Variables
<?php
$text = "Hello!";
echo $text;
unset($text);
// echo $text;

$a = 2;
$b = $a;
$a++;

//by reference

$c = 2;
$d = &$c;
$c++;

//$d is still equal $c

$string = "ahoj";
var_dump($string); //uncommenting zend_extension="C:/wamp/php\ext\php_xdebug.dll" in php.ini makes better output of var_dump
var_dump([1,2,3,4]);
