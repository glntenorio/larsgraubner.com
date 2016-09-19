<?php while (have_posts()) : the_post(); ?>
<section class="intro section">
    <div class="inner">
        <div class="portrait">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/lars@2x.jpg" class="portrait__image" alt="Lars Graubner" />
        </div>
        <?php the_content(); ?>
        <a href="<?php echo get_page_link(get_page_by_path('about')); ?>" class="button">Learn more about me</a>
    </div>
</section>
<?php endwhile; ?>

<?php
$args = array(
  'posts_per_page' => 5,
);
$latest = new WP_Query($args);
if ($latest->have_posts()) :
?>
<section class="latest-posts section">
  <div class="inner">
      <h2>Latest blog posts</h2>
      <?php
      $month = null;
      while ($latest->have_posts()) : $latest->the_post();
        $newmonth = get_the_date('F');
        if ($month != $newmonth) {
          if (!is_null($month)) {
            echo '</ul>';
          }
          echo '<div class="date">' . $newmonth . '</div>';
          echo '<ul>';
        }
      ?>
        <li>
          <a href="<?php the_permalink() ?>"><?php the_title(); ?></a>
        </li>
        <?php $month = $newmonth; endwhile; wp_reset_postdata(); ?>
      </ul>
      <a href="<?php echo get_page_link(get_page_by_path('blog')); ?>" class="button">View all blog posts</a>
  </div>
</section>
<?php endif; ?>
