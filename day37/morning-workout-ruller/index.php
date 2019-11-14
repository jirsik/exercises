<?php
function ruller($size_mm, $interval_sm)  //parameters for size of the ruller and the smallest interval
{
    $result = '<div class="ruler">';
    $number_of_px = 10 * $interval_sm - 1;  //setting number of pixels for one interval, -1 si for the line which is visible
    for ($i = 0; $i <= $size_mm; $i += $interval_sm) {  //forloop for each line
        $result = $result . '<div style="margin: 0 ' . $number_of_px . 'px 0 0"';
        if ($i === 0) {
            $result = $result . 'class="cm"><span>0</span></div>';
        } else if ($i % 10 ===0) {
            $result = $result . 'class="cm"><span>' . ($i/10) . '</span></div>';
        } else if ($i % 5 ===0) {
            $result = $result . 'class="mm longer"></div>';
        } else {
            $result = $result . 'class="mm"></div>';
        }
    }
    $result = $result . '</div>';
    return $result;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Ruller</title>
</head>
<body>
<?php
    echo ruller(50, 1);
    echo '<br>';
    echo '<br>';
    echo '<br>';
    echo ruller(30, 2);
    echo '<br>';
    echo '<br>';
    echo '<br>';
    echo ruller(40, 4);
?>
</body>
</html>
