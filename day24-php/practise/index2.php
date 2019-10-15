<?php
$time_served = 0;
while ($time_served < 10) {
    ++$time_served;
    echo "The prisoner has served {$time_served} years.<br>";
}

echo "<br><br>";

$time_served = 0;
do {
    ++$time_served;
    echo "The prisoner has served {$time_served} years.<br>";
} while ($time_served < 10);

echo "<br><br>";

for ($i =5 ; $i > 0; $i--) {
    echo "The prisoner has {$i} more years to serve<br>";
}

echo "<br><br>";

for ($i = 10; $i > 0; $i--) {
    echo "The prisoner has {$i} more years to serve.<br>";
    if ($i > 5) {
        continue;
    }
    echo "Going to a parole hearing...<br>";
    if ($i === 2) {
        echo "Paroled!";
        break;
    }
}