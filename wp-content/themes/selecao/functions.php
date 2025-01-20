<?php
/**
 * selecao functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package selecao
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function selecao_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on selecao, use a find and replace
		* to change 'selecao' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'selecao', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', 'selecao' ),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'selecao_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action( 'after_setup_theme', 'selecao_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function selecao_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'selecao_content_width', 640 );
}
add_action( 'after_setup_theme', 'selecao_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function selecao_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'selecao' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'selecao' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'selecao_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function selecao_scripts() {
	wp_enqueue_style( 'selecao-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'selecao-style', 'rtl', 'replace' );

	wp_enqueue_style( 'selecao-bootstrap',get_template_directory_uri() . '/html/assets/vendor/bootstrap/css/bootstrap.min.css', array(), _S_VERSION );
	wp_enqueue_style( 'selecao-bootstrap-icons',get_template_directory_uri() . '/html/assets/vendor/bootstrap-icons/bootstrap-icons.css', array(), _S_VERSION );
	
	
	wp_enqueue_style( 'selecao-main.css',get_template_directory_uri() . '/html/assets/css/main.css', array(), _S_VERSION );
	
	wp_enqueue_script( 'selecao-bundle', get_template_directory_uri() . 'assets/vendor/bootstrap/js/bootstrap.bundle.min.js', array(), _S_VERSION, true );			
	wp_enqueue_script( 'selecao-swiper', get_template_directory_uri() . '/html/assets/vendor/swiper/swiper-bundle.min.js', array(), _S_VERSION, true );


	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'selecao_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

require get_template_directory() . '/src/init.php';

// Block dasborde stayle

function my_custom_admin_css_inline() {
	echo '<style>
 #wpadminbar {
		background-color: #222 !important;
	}

	.block-editor-block-list__block img {
		width: 220px;
		margin-bottom: 30px;
	}

	.wrap h1 {
		color: #007cba;
	}

	.components-panel__row div {
		width: 100%;
	}

	.components-panel__row .components-button {
		margin-left: auto;
		display: block;
	}

	.components-panel__row+.components-button {
		margin-left: auto;
		display: block;
	}

	.block-editor-block-list__block {
		border: 1px solid #EEEEEE;
		padding: 29px 16px 16px 20px;
	}

	.block-title {
		font-size: 18px;
		margin: 0;
		padding: 10px 20px;
		border-bottom: 1px solid #EEEEEE;
		position: absolute;
		left: 0;
		right: 0;
		line-height: 1.4em;
		color: #444;
		top: 0px;
		transition: all 0.4s;
		cursor: pointer;
	}

	.block-title span {
		position: absolute;
		width: 9px;
		height: 9px;
		transform: rotate(45deg);
		top: 18px;
		right: 23px;
		z-index: 3;
		transition: all 0.4s;
	}

	.block-title.show span {
		transform: rotate(225deg);
	}

	.block-title span::after {
		content: "";
		position: absolute;
		width: 9px;
		height: 9px;
		border-top: 2px solid #000000;
		border-left: 2px solid #000000;

	}

	.block-editor-block-list__block .title-no-image-selected {
		font-size: 14px;
		color: #444;
	}

	.title-no-image-selected+.components-button {
		display: inline-block;
	}

	.is-destructive {
		padding: 0;
	}

	.components-panel__body {
		border: 1px solid #EEEEEE;
		margin-top: 16px;

	}

	.components-panel__body h6 {
		text-align: left;
		font-size: 13px !important;
		line-height: 1.4em !important;
		color: #444 !important;
		margin-bottom: 10px !important;
	}

	.block-editor-block-list__block textarea {
		border: 1px solid #EEEEEE !important;

	}

	.block-editor-block-list__block h6 {
		text-align: left;
		font-size: 13px !important;
		line-height: 1.4em !important;
		color: #444 !important;
		margin-bottom: 10px !important;
	}

	.components-text-control__input {
		border: 1px solid #EEEEEE !important;
	}

	.editor-post-title__input {
		border: unset;
		padding: 0;

	}

	.wrap>h1 {
		font-size: 23px;
		font-weight: 400;
		margin: 0;
		padding: 9px 0 4px;
		line-height: 1.3;
		color: #1d2327;
	}

	.wrap form .form-table tr {
		display: flex;
		flex-direction: column;

	}

	.wrap form .form-table tr td {
		padding: 0;
		margin: 0;
		width: 100%;
	}

	.wrap form .form-table tr td input,
	.wrap form .form-table tr td textarea {
		width: 100%;
	}

	.wrap form>h2 {
		font-size: 14px;
		padding-bottom: 12px;
		margin: 0;
		line-height: 1.4;
		border-bottom: 1px solid #c3c4c7;
	}

	.wrap form {
		min-width: 255px;
		border: 1px solid #c3c4c7;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .04);
		background: #fff;
		padding: 12px;
	}

	.wrap .submit {
		position: absolute;
		top: 0;
		right: 0;
	}

	.wrap {
		position: relative;
	}

	</style>';

}

add_action('admin_head', 'my_custom_admin_css_inline');