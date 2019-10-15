<?php

require_once '../DB/DB.php';
require_once '../DB/DB_functions.php';

require_once 'Country.php';
require_once 'Region.php';


connect('localhost', 'world', 'root', 'rootroot');

//$query = 'SELECT * FROM `country`  WHERE `population` > 20000000 ORDER BY `population` DESC LIMIT 0, 10';
//$query = 'SELECT * FROM `country`  WHERE `code` = ? LIMIT 1'; // limit 1 stops after getting 1 result .. better performnce

//$results = select($query, ["CZE"], 'Country');

// var_dump($results);

//$region = new Region;

$query2 = 'SELECT * FROM `region` WHERE `name` = ?';

$cafrica = select_one($query2, ['Central Africa'], 'Region');
$cafrica->slug = 'central--africa';
$cafrica->update();

echo 'updated record id ' . $cafrica->id;