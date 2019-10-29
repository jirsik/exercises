<?php 
 
    function createRandomArray($length){
        $data = [];
        for($i = 0; $i < $length; $i++){
            $data[] = rand(1, 99);
        }
        return $data;
    }
 
    function echoArray($array){
        echo '<pre>' . implode('; ', $array) . '</pre>';    
    }
 
    // generate random array with length 5
    $data = createRandomArray(30);
 
    echoArray($data);
 
    //... here comes your sorting code
    function sortArray($array)
    {
        $n = 1;
        for ($j = 0; $j < count($array) - 1; $j++) {
            for ($i = 0; $i < count($array) - $n; $i++) {
                if ( $array[$i] > $array[$i + 1] ) {
                    $x = $array[$i + 1];
                    $array[$i + 1] = $array[$i];
                    $array[$i] = $x;
                }
            }
            $n++;
        }

        return $array;
    }

    $data = sortArray($data);
 
    echoArray($data);
?>