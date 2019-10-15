<?php

function join_two_strings($a, $b)
{
    return $a . $b;
}

echo join_two_strings('ahoj ', 'světe');

//passing by value
function asses_number($i)
{
    return $i < 10;
}

//passing by reference
function asses_number2(&$i)
{
    return $i > 10;
}

$number = 5;
asses_number2($number);

//objects are always passed as reference (it can be cloned)

//default arguments
function headline($a, $b = 'bar')
{
    return $a . $b;
}

echo headline('foo');
echo headline('foo', 'baz');

function headline2($text, $level = 1)
{
    echo "<h{$level}>{$text}</h{$level}>";
}

headline2('nadpis');
headline2('nadpis', 2);



function test($a)
{
    return ++$a; //returns 3
    //return $a++; returns 2 and after increse the value
}
echo test(2);