import $ from 'jquery';
import Headroom from 'headroom.js';
import twemoji from 'twemoji';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/plugins/line-highlight/prism-line-highlight';
import 'prismjs/plugins/line-numbers/prism-line-numbers';

import loadImage from 'helpers/load-image';

export default {
  init() {
    this.addEmojis();
    this.initMobileNav();
    this.initHeadroom();
    this.initImageLazyload();
    this.enableSyntaxHighlighting();
  },

  addEmojis() {
    const postContent = document.getElementsByClassName('content');
    if (postContent.length) {
      twemoji.parse(postContent[0]);
    }
  },

  initMobileNav() {
    const $menu = $('.menu');
    $('.menu-button').on('click', () => {
      $menu.toggleClass('menu--visible');
    });
  },

  initHeadroom() {
    const headroom = new Headroom(document.querySelector('.header'), {
      offset: 200,
      tolerance: {
        down: 20,
        up: 20,
      },
      onUnpin() {
        $('.menu').removeClass('menu--visible');
      },
    });
    headroom.init();
  },

  initImageLazyload() {
    const images = [...document.querySelectorAll('.image img')];
    if (images.length) {
      images.map((image) => {
        const url = image.getAttribute('data-orig');
        return loadImage(url).then((i) => {
          image.setAttribute('src', i.src);
          image.classList.add('loaded');
        }).catch(() => image.classList.add('error'));
      });
    }
  },

  enableSyntaxHighlighting() {
    Prism.highlightAll();
  },
};
