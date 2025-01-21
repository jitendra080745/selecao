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

    // blocks would be registered here
    
    register_block_type(get_template_directory() . '/build/about-us-block/');
    register_block_type(get_template_directory() . '/build/full-width-cta-block/');
    register_block_type(get_template_directory() . '/build/hero-home-block/');
    register_block_type(get_template_directory() . '/build/services-block/');
    register_block_type(get_template_directory() . '/build/testimonial-block/');
    register_block_type(get_template_directory() . '/build/accordion-block/');
    register_block_type(get_template_directory() . '/build/pricing-block/');
    register_block_type(get_template_directory() . '/build/contact-block/');
    register_block_type(get_template_directory() . '/build/teams-block/');
    register_block_type(get_template_directory() . '/build/post-list-block/');
    
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

function am_multiple_blocks_categories($categories)
{
    return array_merge(
        [
            [
                'slug' => 'im-blocks',
                'title' => __('IM Widgets', 'am-widget-library'),
            ],
        ],
        $categories
    );
}

add_action('block_categories_all', 'am_multiple_blocks_categories', 10, 2);
function im_multiple_blocks_unique_style()
{
    wp_enqueue_style('im-blocks-plugin-style', get_template_directory_uri() . '/src/frontend.css');
}

add_action('wp_enqueue_scripts', 'im_multiple_blocks_unique_style', 11);

function im_multiple_blocks_editor_style()
{
    wp_enqueue_style('im-blocks-editor-style', get_template_directory_uri() . '/src/editor.css');
}

add_action('enqueue_block_editor_assets', 'im_multiple_blocks_editor_style');

function register_product_family_block() {
    register_block_type(
        get_template_directory() . '/src/product-family',
        array(
            'render_callback' => 'render_product_family_block',
        )
    );
}
add_action('init', 'register_product_family_block');

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

function register_about_us_block() {
    register_block_type(
        get_template_directory() . '/src/about-us-block',
        array(
            'render_callback' => 'render_about_us_block',
        )
    );
}
add_action('init', 'register_about_us_block');

function register_full_width_cta_block() {
    register_block_type(
        get_template_directory() . '/src/full-width-cta-block',
        array(
            'render_callback' => 'render_full_width_cta_block',
        )
    );
}
add_action('init', 'register_about_us_block');



function register_hero_home_block() {
    register_block_type(
        get_template_directory() . '/src/hero-home-block',
        array(
            'render_callback' => 'render_hero_home_block',
        )
    );
}
add_action('init', 'register_hero_home_block');

function register_services_block() {
    register_block_type(
        get_template_directory() . '/src/services-block',
        array(
            'render_callback' => 'render_services_block',
        )
    );
}
add_action('init', 'register_services_block');

function register_testimonial_block() {
    register_block_type(
        get_template_directory() . '/src/testimonial-bock',
        array(
            'render_callback' => 'render_testimonial_block',
        )
    );
}
add_action('init', 'register_testimonial_block');

function register_accordion_block() {
    register_block_type(
        get_template_directory() . '/src/accordion-block',
        array(
            'render_callback' => 'render_accordion_block',
        )
    );
}
add_action('init', 'register_accordion_block');


function register_pricing_block() {
    register_block_type(
        get_template_directory() . '/src/pricing-block',
        array(
            'render_callback' => 'render_pricing_block',
        )
    );
}
add_action('init', 'register_pricing_block');

function register_contact_block() {
    register_block_type(
        get_template_directory() . '/src/contact-block',
        array(
            'render_callback' => 'render_contact_block',
        )
    );
}
add_action('init', 'register_contact_block');

function register_teams_block() {
    register_block_type(
        get_template_directory() . '/src/teams-block',
        array(
            'render_callback' => 'render_teams_block',
        )
    );
}
add_action('init', 'register_teams_block');

function register_post_list_block() {
    register_block_type(
        get_template_directory() . '/src/post-list-block',
        array(
            'render_callback' => 'render_post_list_block',
        )
    );
}
add_action('init', 'register_post_list_block');