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
            <h1><?php the_title(); ?></h1>
            <hr width="35%">
            <?php the_content(); ?>
            <div class="toolbar">
                <button class="btn btn-green">Start</button>
            </div>
        </div>
    </div>
<?php
endwhile;
?>

</div> <!-- container -->

<?php
get_footer();
