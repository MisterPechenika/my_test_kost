import sayHello from './lib/sayHello.js';
import $ from 'jquery';
import 'slick-carousel';

$('.header__language').click(function() {
  $('.burger').toggleClass('expand');
});



sayHello();
