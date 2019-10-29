<?php

require_once '../DB/DB.php';

DB::connect('127.0.0.1', 'world', 'root', 'rootroot');

$queryToDelete = 'DELETE FROM `region` WHERE `name` LIKE ?';

DB::delete($queryToDelete, ['%test%']);

echo 'Deleted';