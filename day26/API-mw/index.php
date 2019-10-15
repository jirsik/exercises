<?php

include 'data.php';
require_once 'Celebrity.php';

$celebrities = [];


foreach ($data as $celebrity) {

    $person = new Celebrity();
    $person->fromArray($celebrity);
    $celebrities[] = $person;
}

// dump and die 

// var_dump($celebrities);
// var_dump($data);
// die();

header('Content-type: application/json');
echo json_encode($celebrities);