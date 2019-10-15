<?php

$first_name = "Jan";
$surname = '';
//$surname = "Jirsík";
$last_name = $surname?:'unknown';
define('CONS', 'yes');

echo "First name: {$first_name}<br>Surname: {$last_name}";
echo "<br>";

function truncateString(&$a, $b)
{
    $a = mb_substr($a, 0, $b);
}

$sentence = 'Quick brown fox jumps over the lazy dog.';
 
truncateString($sentence, 10);
 
echo $sentence; // prints 'Quick brow'
