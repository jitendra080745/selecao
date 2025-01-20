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

		#wpbody .wrap form .form-table tr td input,
		#wpbody .wrap form .form-table tr td textarea {
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

	#wpbody .wrap .submit {
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


function theme_settings_page() {
    ?>
    <div class="wrap">
        <h1>Theme Options</h1>
        <h2 class="nav-tab-wrapper">
            <a href="" class="nav-tab nav-tab-active" data-tab="tab1">Options</a>
            <a href="" class="nav-tab" data-tab="tab2">Footer</a>
        </h2>
        <form method="post" action="options.php">
            <?php
                settings_fields("section");
                do_settings_sections("theme-options");
                submit_button();
            ?>
            <div id="tab1-content" class="tab-content active">
                <?php do_settings_sections("tab1-options"); ?>
            </div>
            <div id="tab2-content" class="tab-content">
                <?php do_settings_sections("tab2-options"); ?>
            </div>
        </form>
    </div>
    <style>
        .tab-content { display: none; }
        .tab-content.active { display: block; }
    </style>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const tabs = document.querySelectorAll('.nav-tab');
            const tabContents = document.querySelectorAll('.tab-content');
            tabs.forEach(tab => {
                tab.addEventListener('click', function (e) {
                    e.preventDefault();

                    tabs.forEach(t => t.classList.remove('nav-tab-active'));
                    tabContents.forEach(content => content.classList.remove('active'));

                    tab.classList.add('nav-tab-active');
                    document.querySelector(`#${tab.dataset.tab}-content`).classList.add('active');
                });
            });
        });
    </script>
    <?php
}

function add_theme_menu_item() {
    add_menu_page("Theme Options", "Theme Options", "manage_options", "theme-panel", "theme_settings_page", null, 99);
}
add_action("admin_menu", "add_theme_menu_item");

function display_heading_field() {
    ?>
    <input type="text" name="theme_heading" value="<?php echo esc_attr(get_option('theme_heading')); ?>" />
    <?php
}

function display_header_description_field() {
    ?>
    <textarea rows="8" name="theme_header_description"><?php echo esc_attr(get_option('theme_header_description')); ?></textarea>
    <?php
}

function display_description_field() {
    ?>
    <textarea rows="8" name="theme_description"><?php echo esc_attr(get_option('theme_description')); ?></textarea>
    <?php
}

function display_heading_footer_field() {
    ?>
    <input type="text" name="theme_heading_footer" value="<?php echo esc_attr(get_option('theme_heading_footer')); ?>" />
    <?php
}

function display_instagram_link_field() {
    ?>
    <input type="url" name="theme_instagram_link" id="theme_instagram_link" value="<?php echo esc_url(get_option('theme_instagram_link', 'https://instagram.com/')); ?>" placeholder="Enter Instagram URL" />
    <?php
}
function display_facebook_link_field() {
    ?>
    <input type="url" name="theme_facebook_link" id="theme_facebook_link" value="<?php echo esc_url(get_option('theme_facebook_link', 'https://facebook.com/')); ?>" placeholder="Enter Facebook URL" />
    <?php
}
function display_twitter_link_field() {
    ?>
    <input type="url" name="theme_twitter_link" id="theme_twitter_link" value="<?php echo esc_url(get_option('theme_twitter_link', 'https://twitter.com/')); ?>" placeholder="Enter Twitter URL" />
    <?php
}
function display_skype_link_field() {
    ?>
    <input type="url" name="theme_skype_link" id="theme_skype_link" value="<?php echo esc_url(get_option('theme_skype_link', 'https://skype.com/')); ?>" placeholder="Enter Skype URL" />
    <?php
}
function display_linkedin_link_field() {
    ?>
    <input type="url" name="theme_linkedin_link" id="theme_linkedin_link" value="<?php echo esc_url(get_option('theme_linkedin_link', 'https://linkedin.com/')); ?>" placeholder="Enter Linkedin URL" />
    <?php
}
function display_copyright_text_field() {
    ?>
    
	<textarea rows="8" name="theme_copyright_text"><?php echo esc_attr(get_option('theme_copyright_text')); ?></textarea>
    <?php
}

function display_media_upload_button() {
    $image_url = get_option('image-1');
    ?>
    <div id="media-upload-wrapper">
        <div id="image-preview" style="margin-top: 10px;">
            <?php if ($image_url): ?>
                <img src="<?php echo esc_url($image_url); ?>" alt="Selected Image" width="380" />
            <?php endif; ?>
        </div>
        <button type="button" class="button" id="upload-image-1">Select Image</button>
        <button type="button" class="button" id="remove-image" style="display: <?php echo $image_url ? 'inline-block' : 'none'; ?>;">Remove Image</button>
        <input type="hidden" id="image-1" name="image-1" value="<?php echo esc_url($image_url); ?>" />
    </div>
    <?php
}

function display_theme_panel_fields() {
    add_settings_section("section", "Theme Option", null, "theme-options");

    // Tab 1 Fields
    add_settings_section("tab1", null, null, "tab1-options");
    add_settings_field("theme_heading", "Heading", "display_heading_field", "tab1-options", "tab1");
    add_settings_field("theme_header_description", "Description", "display_header_description_field", "tab1-options", "tab1");
    add_settings_field("image-1", "Image", "display_media_upload_button", "tab1-options", "tab1");

    // Tab 2 Fields
    add_settings_section("tab2", null, null, "tab2-options");
    add_settings_field("theme_heading_footer", "Logo", "display_heading_footer_field", "tab2-options", "tab2");
    add_settings_field("theme_description", "Footer Description", "display_description_field", "tab2-options", "tab2");
    add_settings_field("theme_instagram_link", "Instagram Link", "display_instagram_link_field", "tab2-options", "tab2");
    add_settings_field("theme_facebook_link", "Facebook Link", "display_facebook_link_field", "tab2-options", "tab2");
    add_settings_field("theme_twitter_link", "Twitter Link", "display_twitter_link_field", "tab2-options", "tab2");
    add_settings_field("theme_skype_link", "Skype Link", "display_skype_link_field", "tab2-options", "tab2");
    add_settings_field("theme_linkedin_link", "Linkedin Link", "display_linkedin_link_field", "tab2-options", "tab2");
    add_settings_field("theme_copyright_text", "Copyright Text", "display_copyright_text_field", "tab2-options", "tab2");

    // Register Settings
    register_setting("section", "theme_heading");
    register_setting("section", "image-1");
    register_setting("section", "theme_header_description");
    register_setting("section", "theme_heading_footer");
    register_setting("section", "theme_description");
    register_setting("section", "theme_instagram_link");
    register_setting("section", "theme_facebook_link");
    register_setting("section", "theme_twitter_link");
    register_setting("section", "theme_skype_link");
    register_setting("section", "theme_linkedin_link");
    register_setting("section", "theme_copyright_text");
}
add_action("admin_init", "display_theme_panel_fields");

function enqueue_media_uploader_scripts($hook) {
    if ($hook !== 'toplevel_page_theme-panel') {
        return;
    }
    wp_enqueue_media();
}
add_action('admin_enqueue_scripts', 'enqueue_media_uploader_scripts');

function custom_media_uploader_script() {
    ?>
    <script>
        jQuery(document).ready(function ($) {
            const setupMediaUploader = (buttonId, inputId, previewId, removeButtonId, title, buttonText) => {
                let mediaUploader;

                $(buttonId).click(function (e) {
                    e.preventDefault();

                    if (mediaUploader) {
                        mediaUploader.open();
                        return;
                    }

                    mediaUploader = wp.media({
                        title: title,
                        button: { text: buttonText },
                        multiple: false,
                        library: { type: 'image' },
                    });

                    mediaUploader.on('select', function () {
                        const attachment = mediaUploader.state().get('selection').first().toJSON();

                        if (attachment.type !== 'image') {
                            alert('Please select an image file.');
                            return;
                        }

                        $(inputId).val(attachment.url);
                        $(previewId).html(`<img src="${attachment.url}" alt="Selected Image" width="100" />`);
                        $(removeButtonId).show();
                    });

                    mediaUploader.open();
                });

                $(removeButtonId).click(function () {
                    $(inputId).val('');
                    $(previewId).html('');
                    $(this).hide();
                });
            };
			
            setupMediaUploader('#upload-image-1', '#image-1', '#image-preview', '#remove-image', 'Header Image', 'Use this Image');            
        });
    </script>
    <?php
}
add_action('admin_footer', 'custom_media_uploader_script');
