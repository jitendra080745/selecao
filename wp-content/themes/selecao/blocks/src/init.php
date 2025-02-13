<?php
/**
 * Blocks Initializer
 *
 *
 *
 * @since    1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

function create_multiple_blocks_plugin_block_init()
{

    register_block_type(get_template_directory() . '/blocks/build/about-us-block/');
    register_block_type(get_template_directory() . '/blocks/build/full-width-cta-block/');
    register_block_type(get_template_directory() . '/blocks/build/hero-home-block/');
    register_block_type(get_template_directory() . '/blocks/build/services-block/');
    register_block_type(get_template_directory() . '/blocks/build/testimonial-block/');
    register_block_type(get_template_directory() . '/blocks/build/accordion-block/');
    register_block_type(get_template_directory() . '/blocks/build/pricing-block/');
    register_block_type(get_template_directory() . '/blocks/build/contact-block/');
    register_block_type(get_template_directory() . '/blocks/build/teams-block/');
    register_block_type(get_template_directory() . '/blocks/build/recent-blog-block/');
    register_block_type(get_template_directory() . '/blocks/build/commun-hero-block/');
    register_block_type(get_template_directory() . '/blocks/build/post-list-block/');
    register_block_type(get_template_directory() . '/blocks/build/features-block/');
    register_block_type(get_template_directory() . '/blocks/build/post-content-block/');
    
}
add_action('init', 'create_multiple_blocks_plugin_block_init');

function create_a_custom_field($categories){
    return array_merge(
        [
            [
            'slug'  => 'custom-field',
            'title' => __('Custom Field','am-widget-library'),
            ],
        ],
        $categories
    );
}
add_action('block_categories_all','create_a_custom_field');

function create_a_custom_block($categories){ 
    return array_merge(
        [
            [
            'slug'  => 'custom-blocks',
            'title' => __('Custom Blocks','am-widget-library'),
            ],
        ],
        $categories
    );
}
add_action('block_categories_all','create_a_custom_block');

function custom_dashboard_styles() {
    wp_enqueue_style(
        'custom-dashboard-css', 
        get_template_directory_uri() . '/blocks/src/editor.css',
        array(),
        filemtime(get_template_directory() . '/blocks/src/editor.css') 
    );
}
add_action('admin_enqueue_scripts', 'custom_dashboard_styles');

function render_product_family_block($attributes) {
    $related_products = get_field('related_products'); // ACF Relationship Field

    if (empty($related_products)) {
        return '<p>No related Product Family posts selected.</p>';
    }

    $output = '<ul class="product-family-block">';
    foreach ($related_products as $product) {
        $output .= sprintf(
            '<li><a href="%s">%s</a></li>',
            get_permalink($product->ID),
            get_the_title($product->ID)
        );
    }https://lpagery.io/tutorial/how-to-create-a-custom-wordpress-block-without-plugins-in-4-easy-steps-2024/#elementor-toc__heading-anchor-3
    $output .= '</ul>';

    return $output;
}

function register_custom_blocks() {
    // Define blocks and their paths with respective render callbacks
    $blocks = array(
        'about-us-block'        => 'render_about_us_block',
        'full-width-cta-block'  => 'render_full_width_cta_block',
        'hero-home-block'       => 'render_hero_home_block',
        'services-block'        => 'render_services_block',
        'testimonial-block'     => 'render_testimonial_block',
        'accordion-block'       => 'render_accordion_block',
        'pricing-block'         => 'render_pricing_block',
        'contact-block'         => 'render_contact_block',
        'teams-block'           => 'render_teams_block',
        'recent-blog-block'     => 'render_recent_blog_block',
        'commun-hero-block'     => 'render_commun_hero_block',
        'post-list-block'       => 'render_post_list_lock',
        'post-content-block'    => 'render_post_content_block',
    );

    // Loop through the blocks array and register each block
    foreach ( $blocks as $block_name => $render_callback ) {
        register_block_type(
            get_template_directory() . "/build/src/{$block_name}",
            array(
                'render_callback' => $render_callback,
            )
        );
    }
}
add_action('init', 'register_custom_blocks');