<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <title>My eshop</title>

    <link rel="stylesheet" href="css/main.css" />

</head>
<body>
    <?php $site_url = 'http://www.cbp-exercises.test/day32/eshop'; ?>

    <div id="page">

        <?php include 'header.php' ?>

        <?php include 'topmenu.php' ?>

        <div id="content">

        <?php include $target ?>

        </div>

        <?php include 'footer.php' ?>

    </div>

</body>
</html>