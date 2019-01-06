<?php
/**
 * Created by IntelliJ IDEA.
 * User: root
 * Date: 06.01.2019
 * Time: 15.29
 */
require_once("wp_bootstrap_navwalker.php");

activate();

function activate() {
    add_action('init', 'registerMenu');
}

function registerMenu() {
    register_nav_menu('topmeny',__( 'Topp meny' ));
}