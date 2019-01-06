<?php
/**
 * Template Name: Frontpage template backup
 *
 * @package Trond
 * @subpackage Datagulv 3.0
 */

get_header();
?>
    <div class="container home">

        <!-- initial top-promoted content
        <div class="row">
            <div class="col col-lg-12">
                <h2>Hei och vâlkômmen</h2>
                <hr width="35%">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed fringilla ligula.
                    Vestibulum mattis libero et nisi viverra, eget bibendum nunc semper.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam ac consectetur arcu.
                    Aenean in magna egestas, pellentesque eros nec, iaculis tellus.
                    <a href="http://testasd.com">AJGB</a> gir mangfold sies det.</p>
            </div>
        </div>
        -->

        <?php
        while (have_posts()) : the_post();
            $pageId = get_the_ID();
            $post = get_post($pageId);
            ?>
            <div class="row post">
                <div class="col col-lg-12">
                    <h1><?php the_title(); ?></h1>
                    <hr width="35%">
                    <?php the_excerpt(); ?>
                    <div class="toolbar">
                        <a href="<?= get_the_permalink($post) ; ?>" class="btn btn-green">Read more</a>
                    </div>
                </div>
            </div>
        <?php
        endwhile;
        ?>

    </div> <!-- container -->

<?php
get_footer();
