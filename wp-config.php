<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'selecao' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );



/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );


/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'qrDe.15N*n$A.T`OC.3BQ4DiYSqKmn[e.>Yeypx2q|0(&MSc(Jo^*P^(3ufk<~xh' );
define( 'SECURE_AUTH_KEY',  '8XONh.5Kq]o/a644UzwBb^xDeRxp*PtgLBzh_y^_ F<26(QVp}}o-5)ck2rv.Ri%' );
define( 'LOGGED_IN_KEY',    'mz+fQ|lh~% ANumQ]=&{G@pQ,@tJ{+?pisCsQ5;s.Ks&1`WK@L0>zvDvOyI.59~.' );
define( 'NONCE_KEY',        'wIksiPpo6{USR/[WiRm!BcH@R=Y!6)EG#&@W2AA-3_l6V@2>lG1Oj`i[/8t8^E~y' );
define( 'AUTH_SALT',        'l2EMb[VaD`Bc0f4_23Iz@TAoVCh7g]c[]C]{[~;t5|3za9ah)JOcox-C_ASNX0*C' );
define( 'SECURE_AUTH_SALT', 'l2 0v=N>Bw:4+TG,LfGRjAq1e|/A<c`|Z)x5Y$e%LxDZ]`^z`$,EYKg2uJqJh%j}' );
define( 'LOGGED_IN_SALT',   'fQxC5i~z=4uq`.0$wh#|jG4Fw(i4_@GO6<0%yT7`3W,mc3Fa(2bmMf*:D7b]<p4#' );
define( 'NONCE_SALT',       'SS]G&z6[6tFmM$Xz-T$A^>m|`{j(U79Q{sQo[jd8W@#,qM7:]b%5e[lX8dmmp4rg' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
