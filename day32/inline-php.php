<?php
$headline = 'Welcome';
$vehicles = [
    'Bicycle' => 50,
    'Car' => 150,
    'Train' => 110
];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?= $headline?></title>
</head>
<body>
    <?= $headline?>

    <table>
        <tr>
            <th>Means of transport</th>
            <th>Max. speed (km/h)</th>
        </tr>
        <?php foreach ($vehicles as $key => $speed) : ?>
            <tr>
                <td><?= $key ?></td>
                <td><?= $speed ?></td>
            </tr>      
        <?php endforeach; ?>
        

    </table>

</body>
</html>