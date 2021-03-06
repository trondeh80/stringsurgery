<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title><?php wp_title(); ?></title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet">
    <meta name="viewport" content="width=device-width">

    <link rel="stylesheet" href="/wp-content/themes/stringsurgery/style.css">
    <?php
    wp_head();
    ?>
</head>
<body>
<header>
    <div class="container">
        <nav class="nav">

            <div class="nav-elements">
                
                <div class="burger">
                    <button class="btn burger-icon">
                        <div class="hamburger hamburger--collapse js-hamburger">
                            <div class="hamburger-box">
                                <div class="hamburger-inner"></div>
                            </div>
                        </div>
                    </button>
                </div>

                <div class="logo">
                    <a href="/">
                        <img src="/wp-content/themes/stringsurgery/image/logosketch4.png" />
                    </a>
                </div>
            </div>

            <!-- topmenu ul -->
            <?php
            wp_nav_menu(array(
                    'menu' => 'topmeny',
                    'theme_location' => 'topmeny',
                    'depth' => 3,
                    'container_id' => 'navbar-collapse',
                    'container' => 'div',
                    'container_class' => 'collapse navbar-collapse',
                    'menu_class' => 'nav navbar-nav',
                    'fallback_cb' => 'wp_bootstrap_navwalker::fallback',
                    'walker' => new wp_bootstrap_navwalker())
            );
            ?>

        </nav>
    </div>
</header>