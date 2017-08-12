(function($) {

  skel.breakpoints({
    xlarge: '(max-width: 1680px)',
    large:  '(max-width: 1280px)',
    medium: '(max-width: 980px)',
    small:  '(max-width: 736px)',
    xsmall: '(max-width: 480px)',
    xxsmall: '(max-width: 360px)'
  });

  $(function() {

    $('.bxslider').bxSlider({});

    var $window = $(window),
      $body = $('body'),
      $header = $('#header');

    // Disable animations/transitions until the page has loaded.
      $body.addClass('is-loading');

      $window.on('load', function() {
        window.setTimeout(function() {
          $body.removeClass('is-loading');
        }, 100);
      });

    // Dynamic header on scroll
      $window.on("scroll", function () {
          if ($window.width() > 480) {
            if ($(this).scrollTop() > 830) {
              $("#header").css("background-color", "white");
              $("#header nav ul li a").css("color", "#53bed5");
            }
            else {
              $("#header").css("background-color", "transparent");
              $("#header nav ul li a").css("color", "#fff");
            }
          }
          else {
            if ($(this).scrollTop() > 315) {
              $("#header").css("background-color", "white");
              $("#header .navPanelToggle").css("color", "#53bed5");
            }
            else {
              $("#header").css("background-color", "transparent");
              $("#header .navPanelToggle").css("color", "#fff");
            }
          }
      });

    // Fix: Placeholder polyfill.
      $('form').placeholder();

    // Prioritize "important" elements on medium.
      skel.on('+medium -medium', function() {
        $.prioritize(
          '.important\\28 medium\\29',
          skel.breakpoint('medium').active
        );
      });

    // Dropdowns.
      $('#nav > ul').dropotron({
        alignment: 'center'
      });

    // Banners.
      $('#banner > article')
        .css('cursor', 'pointer')
        .on('click', 'a', function(event) {
          event.stopPropagation();
        })
        .on('click', function(event) {

          event.preventDefault();
          event.stopPropagation();

          var $a = $(this).find('a');

          if ($a.length > 0)
            window.location.href = $a.attr('href');

        })
        .each(function() {

          var $this = $(this),
            $img = $this.children('img'),
            x;

          // Assign image.
            $this.css('background-image', 'url(' + $img.attr('src') + ')');

          // Set background position.
            if (x = $img.data('position'))
              $this.css('background-position', x);

          // Hide <img>.
            $img.hide();

        });

    // Off-Canvas Navigation.

      // Navigation Panel Toggle.
        $('<a href="#navPanel" class="navPanelToggle">Menu</a>')
          .appendTo($header);

      // Navigation Panel.
        $(
          '<div id="navPanel">' +
            '<nav>' +
              $('#nav').navList() +
            '</nav>' +
            '<a href="#navPanel" class="close"></a>' +
          '</div>'
        )
          .appendTo($body)
          .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'right',
            target: $body,
            visibleClass: 'is-menu-visible'
          });

      // Fix: Remove transitions on WP<10 (poor/buggy performance).
        if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
          $('#navPanel')
            .css('transition', 'none');

        // Select all links with hashes
        $('a[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .click(function(event) {
            // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
              &&
              location.hostname == this.hostname
            ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  };
                });
              }
            }
          });

  });

})(jQuery);
