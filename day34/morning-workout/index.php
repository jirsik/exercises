<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php
        $pos_x = "B"; //set letter A - H
        $pos_y = 4; //set number 1 - 8

        $letters_array = ["A", "B", "C", "D", "E", "F", "G", "H"];
        $pos_x_num = array_search($pos_x, $letters_array);
        
        echo "<div class='board'>";
        for ($i = 0; $i < 8; $i++)
        {
            echo "<div class='row'>";
            for ($j = 0; $j <8; $j++)
            {   
                $color = (($i + $j ) % 2) ? "black" : "white";
                echo "<div class='{$color}'>";
                if ($i === 8 - $pos_y && $j === ($pos_x_num)) {
                    echo "<div class='king'></div>";
                }
                echo "</div>";
            }
            echo "</div>";
        }
        echo "</div>";
    ?>       
</div>
</body>
</html>