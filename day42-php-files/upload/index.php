<?php

var_dump($_GET);
var_dump($_POST);
var_dump($_FILES);

$target_dir = 'uploads/images';
if (!file_exists($target_dir)) {
    mkdir($target_dir, 0777, true);
}

move_uploaded_file(
    $_FILES['fileToUpload']['tmp_name'],
    $target_dir ."/".  $_FILES['fileToUpload']['name'] 
);
// move_uploaded_file($_FILES['foo']['tmp_name'], 'my/uploads/folder/'.$_FILES['foo']['name']);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="" method="post" enctype="multipart/form-data">
    <input type="file" name="fileToUpload">
        <input type="submit" value="submit">
    </form>
</body>
</html>