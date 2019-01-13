<?php
/**
 * Template Name: Frontpage template
 *
 * @package Trond
 * @subpackage Datagulv 3.0
 */

get_header();
?>
<div class="container home">
<?php
while (have_posts()) : the_post();
    $pageId = get_the_ID();
    $post = get_post($pageId);
    ?>
    <div class="row post">
        <div class="col col-lg-12">
            <?php
            if (has_post_thumbnail()) {
                ?>
                <div class="image">
                    <?= get_the_post_thumbnail( $post->ID, 'full' , array("class" => "img-responsive") ); ?>
                </div>
                <?php
            }
            ?>
            <h1><?php the_title(); ?></h1>
            <hr width="35%">
            <?php the_content(); ?>
        </div>
    </div>
<?php
endwhile;
?>

</div> <!-- container -->

<?php
get_footer();
