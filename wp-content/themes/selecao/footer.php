<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package selecao
 */

?>

<footer id="footer" class="footer dark-background">
    <div class="container">
    <h3 class="sitename">
        <?php 
          if (!empty(get_option('theme_heading_footer'))) {
              echo esc_html(get_option('theme_heading_footer'));
          } 
          ?>
      </h3>
      <p>
          <?php 
          if (!empty(get_option('theme_description'))) {
              echo esc_html(get_option('theme_description'));
          } 
          ?>
      </p>
      <div class="social-links d-flex justify-content-center">
          <?php if (!empty(get_option('theme_twitter_link'))): ?>
              <a href="<?php echo esc_url(get_option('theme_twitter_link')); ?>" target="_blank">
                  <i class="bi bi-twitter"></i>
              </a>
          <?php endif; ?>

          <?php if (!empty(get_option('theme_facebook_link'))): ?>
              <a href="<?php echo esc_url(get_option('theme_facebook_link')); ?>" target="_blank">
                  <i class="bi bi-facebook"></i>
              </a>
          <?php endif; ?>

          <?php if (!empty(get_option('theme_instagram_link'))): ?>
              <a href="<?php echo esc_url(get_option('theme_instagram_link')); ?>" target="_blank">
                  <i class="bi bi-instagram"></i>
              </a>
          <?php endif; ?>

          <?php if (!empty(get_option('theme_skype_link'))): ?>
              <a href="<?php echo esc_url(get_option('theme_skype_link')); ?>" target="_blank">
                  <i class="bi bi-skype"></i>
              </a>
          <?php endif; ?>

          <?php if (!empty(get_option('theme_linkedin_link'))): ?>
              <a href="<?php echo esc_url(get_option('theme_linkedin_link')); ?>" target="_blank">
                  <i class="bi bi-linkedin"></i>
              </a>
          <?php endif; ?>
      </div>

      <div class="container">
        <div class="copyright">

          

        <?php 
          if (!empty(get_option('theme_heading_footer'))) {
              echo esc_html(get_option('theme_heading_footer'));
          } 
          ?>
  
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you've purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </div>
  </footer>

<?php wp_footer(); ?>

</body>
</html>
