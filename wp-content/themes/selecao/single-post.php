<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package selecao
 */

get_header();
?>

	<main>
  <?php
    $content = get_the_content();
    $blocks = parse_blocks($content);
    $common_hero_block = '';
    $post_content_block = '';

    foreach ($blocks as $block) {
        if (!empty($block['blockName'])) {
            if ($block['blockName'] === 'custom-blocks/commun-hero-block') {
                $common_hero_block = render_block($block);
            } elseif ($block['blockName'] === 'custom-blocks/post-content-block') {
                $post_content_block = render_block($block);
            }
        }
    }
  ?>

<?php echo  $common_hero_block;?>
    <div class="container">
        <div class="row">

            <div class="col-lg-8">

                <!-- Blog Details Section -->
                <section id="blog-details" class="blog-details section">
                  <div class="container">

                    <article class="article">

                      <div class="post-img">
                        <img src="<?php echo get_the_post_thumbnail_url() ?>" alt="" class="img-fluid">
                      </div>

                      <h2 class="title"><?php the_title(); ?></h2>

                      <div class="meta-top">
                        <ul>
                          <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-details.html">John Doe</a></li>
                          <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2020-01-01">Jan 1, 2022</time></a></li>
                          <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a></li>
                        </ul>
                      </div>
                      <div class="content">
                      <?php echo  $post_content_block;?>
                      </div>
                      <div class="meta-bottom">
                        <i class="bi bi-folder"></i>
                        <ul class="cats">
                          <li><a href="#">Business</a></li>
                        </ul>

                        <i class="bi bi-tags"></i>
                        <ul class="tags">
                          <li><a href="#">Creative</a></li>
                          <li><a href="#">Tips</a></li>
                          <li><a href="#">Marketing</a></li>
                        </ul>
                      </div><!-- End meta bottom -->

                    </article>

                  </div>
                </section><!-- /Blog Details Section -->

          
                <!-- Comment Form Section -->
                <section id="comment-form" class="comment-form section">
                  <div class="container">
                    <h4>
                    8 Comments
                    </h4>
                      <?php comments_template(); ?>
                  </div>
                </section><!-- /Comment Form Section -->

            </div>

            <div class="col-lg-4 sidebar">

              <div class="widgets-container">

                <!-- Blog Author Widget -->
                <div class="blog-author-widget widget-item">

                  <div class="d-flex flex-column align-items-center">
                    <img src="assets/img/blog/blog-author.jpg" class="rounded-circle flex-shrink-0" alt="">
                    <h4>Jane Smith</h4>
                    <div class="social-links">
                      <a href="https://x.com/#"><i class="bi bi-twitter-x"></i></a>
                      <a href="https://facebook.com/#"><i class="bi bi-facebook"></i></a>
                      <a href="https://instagram.com/#"><i class="biu bi-instagram"></i></a>
                      <a href="https://instagram.com/#"><i class="biu bi-linkedin"></i></a>
                    </div>

                    <p>
                      Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
                    </p>

                  </div>
                </div><!--/Blog Author Widget -->

                <!-- Search Widget -->
                <div class="search-widget widget-item">

                  <h3 class="widget-title">Search</h3>
                  <form action="">
                    <input type="text">
                    <button type="submit" title="Search"><i class="bi bi-search"></i></button>
                  </form>

                </div><!--/Search Widget -->

                <!-- Categories Widget -->
                <!-- <div class="categories-widget widget-item">
                    <h3 class="widget-title">Categories</h3>
                    <ul class="mt-3">
                      <li><a href="#">General <span>(25)</span></a></li>
                      <li><a href="#">Lifestyle <span>(12)</span></a></li>
                      <li><a href="#">Travel <span>(5)</span></a></li>
                      <li><a href="#">Design <span>(22)</span></a></li>
                      <li><a href="#">Creative <span>(8)</span></a></li>
                      <li><a href="#">Educaion <span>(14)</span></a></li>
                    </ul> 
                </div> -->
                
                <!--Categories Widget -->
                <div class="categories-widget widget-item">
                    <h3 class="widget-title">Custom Categories</h3>
                    <ul class="mt-3">
                      <?php 
                        $categories = get_categories(); 
                        foreach($categories as $category) {
                          $category_count = $category->count; // Number of posts in each category
                          echo '<li><a href="' . get_category_link($category->term_id) . '">' . $category->name . ' <span>(' . $category_count . ')</span></a></li>';
                        }
                      ?>
                    </ul>
                </div>
                
                <!--/Categories Widget -->
                <!-- Recent Posts Widget -->
                <div class="recent-posts-widget widget-item">

                  <h3 class="widget-title">Recent Posts</h3>

                  <div class="post-item">
                    <h4><a href="blog-details.html">Nihil blanditiis at in nihil autem</a></h4>
                    <time datetime="2020-01-01">Jan 1, 2020</time>
                  </div><!-- End recent post item-->

                  <div class="post-item">
                    <h4><a href="blog-details.html">Quidem autem et impedit</a></h4>
                    <time datetime="2020-01-01">Jan 1, 2020</time>
                  </div><!-- End recent post item-->

                  <div class="post-item">
                    <h4><a href="blog-details.html">Id quia et et ut maxime similique occaecati ut</a></h4>
                    <time datetime="2020-01-01">Jan 1, 2020</time>
                  </div><!-- End recent post item-->

                  <div class="post-item">
                    <h4><a href="blog-details.html">Laborum corporis quo dara net para</a></h4>
                    <time datetime="2020-01-01">Jan 1, 2020</time>
                  </div><!-- End recent post item-->

                  <div class="post-item">
                    <h4><a href="blog-details.html">Et dolores corrupti quae illo quod dolor</a></h4>
                    <time datetime="2020-01-01">Jan 1, 2020</time>
                  </div><!-- End recent post item-->

                </div><!--/Recent Posts Widget -->
                <!-- Tags Widget -->
                <div class="tags-widget widget-item">
                  <h3 class="widget-title">Tags</h3>
                      <ul>
                        <?php $tags=get_tags();
                          foreach($tags as $tag){
                            echo '<li><a href="' . get_tag_link($tag->term_id) . '">' . $tag->name . ' </a></li>';
                          }
                        ?>
                      </ul>
                </div>
                <!--/Tags Widget -->

              </div>

            </div>

        </div>
    </div>

	</main><!-- #main -->

<?php

get_footer();
