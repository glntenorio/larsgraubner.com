<?php
namespace Roots\Sage\Titles;
/**
 * Page titles
 */
function title() {
  if (is_home()) {
    if (get_option('page_for_posts', true)) {
      return get_the_title(get_option('page_for_posts', true));
    } else {
      return __('Latest Posts', 'larsgraubner');
    }
  } elseif (is_archive()) {
    return get_the_archive_title();
  } elseif (is_search()) {
    return sprintf(__('Search Results for %s', 'larsgraubner'), get_search_query());
  } elseif (is_404()) {
    return __('Not Found', 'larsgraubner');
  } else {
    $heading = get_post_meta(get_the_ID(), '_page_heading', true);
    if (!empty($heading)) {
        return $heading;
    } else {
        return get_the_title();
    }
  }
}
