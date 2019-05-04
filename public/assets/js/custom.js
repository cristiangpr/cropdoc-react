/*global jQuery:false */
jQuery(document).ready(function ($) {
  "use strict";

  //add some elements with animate effect
  $(".box").hover(
    function () {
      $(this).find('span.badge').addClass("animated fadeInLeft");
      $(this).find('.ico').addClass("animated fadeIn");
    },
    function () {
      $(this).find('span.badge').removeClass("animated fadeInLeft");
      $(this).find('.ico').removeClass("animated fadeIn");
    }
  );

  (function () {

    var $menu = $('.navigation nav'),
      optionsList = '<option value="" selected>Go to..</option>';

    $menu.find('li').each(function () {
        var $this = $(this),
          $anchor = $this.children('a'),
          depth = $this.parents('ul').length - 1,
          indent = '';

        if (depth) {
          while (depth > 0) {
            indent += ' - ';
            depth--;
          }

        }
        $(".nav li").parent().addClass("bold");

        optionsList += '<option value="' + $anchor.attr('href') + '">' + indent + ' ' + $anchor.text() + '</option>';
      }).end()
      .after('<select class="selectmenu">' + optionsList + '</select>');

    $('select.selectmenu').on('change', function () {
      window.location = $(this).val();
    });

  })();

  //Navi hover
  $('ul.nav li.dropdown').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
  }, function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
  });

  //add some elements with animate effect



  $('.accordion').on('show', function (e) {

    $(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
    $(e.target).prev('.accordion-heading').find('.accordion-toggle i').removeClass('icon-plus');
    $(e.target).prev('.accordion-heading').find('.accordion-toggle i').addClass('icon-minus');
  });

  $('.accordion').on('hide', function (e) {
    $(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
    $(this).find('.accordion-toggle i').not($(e.target)).removeClass('icon-minus');
    $(this).find('.accordion-toggle i').not($(e.target)).addClass('icon-plus');
  });


  //prettyphoto
  $("a[data-pretty^='prettyPhoto']").prettyPhoto({
    social_tools: ''
  });

  // tooltip
  $('.social-network li a, .options_box .color a').tooltip();


  //scroll to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();

    } else {
      $('.scrollup').fadeOut();

    }
  });
  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

  $('.scrollto').on('click', function (e) {
    e.preventDefault();
    var target = $(this.hash);
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1500, 'easeInOutExpo');
  });
  // Intro carousel
  var introCarousel = $("#introCarousel");
  var introCarouselIndicators = $("#intro-carousel-indicators");
  introCarousel.find(".carousel-inner").children(".item").each(function(index) {
    (index === 0) ?
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>") :
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");

    $(this).css("background-image", "url('" + $(this).children('.carousel-background').children('img').attr('src') +"')");
    $(this).children('.carousel-background').remove();
  });

  // introCarousel.on('slid.bs.carousel', function (e) {
  //   $(this).find('h2').addClass('animated fadeInDown');
  //   $(this).find('p').addClass('animated fadeInUp');
  //   $(this).find('.btn-get-started').addClass('animated fadeInUp');
  // });


  //parallax
  if ($('#parallax1').length || $('#parallax2').length) {

    $(window).stellar({
      responsive: true,
      scrollProperty: 'scroll',
      parallaxElements: false,
      horizontalScrolling: false,
      horizontalOffset: 0,
      verticalOffset: 0
    });

  }

  function navbar() {

    if ($(window).scrollTop() > 1) {
      $('#navigation').addClass('show-nav');
    } else {
      $('#navigation').removeClass('show-nav');
    }

  }

  $(document).ready(function () {

    var browserWidth = $(window).width();

    if (browserWidth > 560) {

      $(window).scroll(function () {
        navbar();
      });
    }

  });


  $(window).resize(function () {

    var browserWidth = $(window).width();

    if (browserWidth > 560) {

      $(window).scroll(function () {
        navbar();
      });
    }

  });
});
