<?php
/**
 * Helpers functions to reduce the code with already helpers of WordPress.
 *
 * For Example: img_include('your-image.png');
 *
 * @package AndreaTheme
 */

function get_image( $image ) {

	return esc_url( get_template_directory_uri() ) . '/assets/images/' . $image;

}

function get_andrea_navs( $nav ) {

	return wp_nav_menu( array( 'theme_location' => $nav, 'menu_id' => $nav ) );

}