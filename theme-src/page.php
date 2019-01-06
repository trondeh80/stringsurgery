<?php
get_header();

while (have_posts()) : the_post();
    $pageId = get_the_ID();
    $post = get_post($pageId);
    ?>
    <div class="container detail">
        <div class="row">
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
                <h1><? the_title(); ?></h1>
                <hr width="35%">
                <? the_content(); ?>
            </div>
        </div>
    </div>
<?php

endwhile;
get_footer();
