<?php
require_once '../DB/DB.php';
//require_once '../DB/DB_functions.php';


DB::connect('127.0.0.1', 'games', 'root', 'rootroot');

if (isset($_GET["orderby"])) {
    $orderby = $_GET["orderby"];
    if (isset($_GET["way"])) {
        $way = $_GET['way'];
    } else {
        $way = "ASC";
    }
}


$query = 'SELECT * FROM `games`';

if ($orderby && $way) {
    $query = $query . ' ORDER BY ' . '`' . $orderby . '` ' . $way;
}


$result = DB::select($query, []);

header('Content-type: application/json');
echo json_encode($result);