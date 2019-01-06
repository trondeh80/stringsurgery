<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="utf-8">
    <title><?= get_wp_title(); ?></title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet">
    <meta name="viewport" content="width=device-width">
    <?php
        wp_head();
    ?>
</head>
<body>
<header>
    <div class="container">
        <nav class="nav">
            <div class="burger">
                <button class="btn burger-icon">&#9776; Menu</button>
            </div>
            <ul>
                <li>
                    <a href="">home</a>
                </li>
                <li>
                    <a href="">services</a>
                </li>
                <li>
                    <a href="">about</a>
                </li>
                <li>
                    <a href="">contact</a>
                </li>
            </ul>
        </nav>
        <!--<div class="logo">StringSurgery</div>-->
    </div>
</header>