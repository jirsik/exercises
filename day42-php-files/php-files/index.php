<?php

var_dump( pathinfo( __FILE__ ) );
 
var_dump( basename( __FILE__ ) );
var_dump( dirname( __FILE__ ) );


var_dump(scandir(__DIR__));


$directoryHandle = opendir(__DIR__);
while (false !== ($file = $file = readdir($directoryHandle))) {
    var_dump($file);

}

closedir($directoryHandle);
if (is_dir('2020')){
    rmdir('2020');
} else {
    mkdir('2020');
}

var_dump( file_exists('photos.txt'));

$fileHandle = fopen('photos.txt', 'r');
var_dump(fgets($fileHandle));
fclose($fileHandle);

$fileHandle = fopen('2019/info.txt', 'a');
fwrite($fileHandle, 'hi' . "\r\n"); //"\r\n" adding new line
fclose($fileHandle);


$data = [
    'Bruce',
    'Wayne',
    1910,
    'Long text
long text
longer text'
];

$fHandle = fopen('data.csv', 'w');

fputcsv($fHandle, $data, ',', '/');

fclose($fHandle);

file_put_contents('data.json', json_encode($data));

unlink('data.json');


function browse_directory($directory)
{
    $files = scandir($directory);
    foreach($files as $file) {
        if($file == '.' || $file == '..') continue;
        if(is_dir($directory.'/'.$file)) {
            // using recursiveness to go deeper
            browse_directory($directory.'/'.$file);
        } else {
            echo $directory.'/'.$file.'<br>';
        }
    }
}
browse_directory(__DIR__);