<?php

$cars_i_want = [];
var_dump($cars_i_want);

array_push($cars_i_want, "Aston Martin" );
array_push($cars_i_want, "Bugatti" );
array_push($cars_i_want, "Ferrari" );
array_push($cars_i_want, "Lamborghini" );
array_push($cars_i_want, "Maserati" );
array_push($cars_i_want, "Mercedes" );
array_push($cars_i_want, "Porsche" );
array_push($cars_i_want, "Skoda" );

var_dump($cars_i_want);

echo "For myself I would buy {$cars_i_want[0]}.<br>";
$cars_i_want[4] = "Smart";
echo "For my kids I would buy {$cars_i_want[4]}.<br>";

echo "<ul>";
foreach ($cars_i_want as $car) {
    echo "<li>$car</li>";
}
echo "</ul>";

$car_prices = [
    'Skoda Octavia' => 270000,
    'Volkswagen Golf' => 170000,
    'BMW X6' => 380000,
    'Porsche 911' => 1150000
];


foreach ($car_prices as $car => $price) {
    echo "You can have a $car for just $price CZK.<br>";
}