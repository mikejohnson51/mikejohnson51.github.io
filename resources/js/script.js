$(document).ready(function() {

    /* For the sticky navigation */
    $('.js--section-profile').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });

    $('.js--arrow-icon-1').click(function() {
        var icon = $('.js--arrow-icon-1 i');

        if (icon.hasClass('ion-ios-arrow-right')) {
            icon.addClass('ion-ios-arrow-down');
            icon.removeClass('ion-ios-arrow-right');
        } else {
            icon.addClass('ion-ios-arrow-right');
            icon.removeClass('ion-ios-arrow-down');
        }
    });


    $('.js--arrow-icon-2').click(function() {
        var icon = $('.js--arrow-icon-2 i');

        if (icon.hasClass('ion-ios-arrow-right')) {
            icon.addClass('ion-ios-arrow-down');
            icon.removeClass('ion-ios-arrow-right');
        } else {
            icon.addClass('ion-ios-arrow-right');
            icon.removeClass('ion-ios-arrow-down');
        }
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInLeft');
    }, {
        offset: '90%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });





    /* Navigation scroll */
    $(function() {
      $('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    /* Mobile navigation */
  $('.js--nav-icon, .js--main-nav a, .logo-black').click(function(element){
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    //Gets the class name of the element that triggered the event
    var clicked = element.target.className;

    //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
    if (icon.hasClass('ion-navicon-round') && clicked == 'logo-black')
       return;

    //Opens and closes the menu
    if ($(window).width() < 768){
       nav.slideToggle(200);
    }

    //Changes icon states of the menu button
    if (icon.hasClass('ion-navicon-round')) {
       icon.addClass('ion-close-round');
       icon.removeClass('ion-navicon-round');
    } else {
       icon.addClass('ion-navicon-round');
       icon.removeClass('ion-close-round');
    }
    });


    $(window).resize(function(){
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    if ($(window).width() > 767){
       nav.css("display", "block");
       icon.addClass('ion-close-round');
       icon.removeClass('ion-navicon-round');
    } else {
       nav.css("display", "none");
       icon.addClass('ion-navicon-round');
       icon.removeClass('ion-close-round');
    }

    });


    $('.mp-image').magnificPopup({
        type: 'image'
    });

    $('.pipeline-poster').magnificPopup({
        type: 'iframe'
    });

    $('.popup-gallery').magnificPopup({
       delegate: 'a',
       type: 'image',
       tLoading: 'Loading image #%curr%...',
       mainClass: 'mfp-img-mobile',
       gallery: {
           enabled: true,
           navigateByImgClick: true,
           preload: [0,1] // Will preload 0 - before current, and 1 after the current image
       },
       image: {
           tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
           titleSrc: function(item) {
               return item.el.attr('title') + '<small>Johnson et. al https://doi.org/10.1016/j.ydbio.2018.04.014 &copy; Creative Commons</small>';
           }
       }
   });
    $('.popup-gallery-inverts').magnificPopup({
       delegate: 'a',
       type: 'image',
       tLoading: 'Loading image #%curr%...',
       mainClass: 'mfp-img-mobile',
       gallery: {
           enabled: true,
           navigateByImgClick: true,
           preload: [0,1] // Will preload 0 - before current, and 1 after the current image
       },
       image: {
           tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
           titleSrc: function(item) {
               return item.el.attr('title') + '<small>&copy; Pat Johnson</small>';
           }
       }
   });
   $('.popup-gallery-thesis').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function(item) {
              return item.el.attr('title') + '<small>&copy; Mike Johnson</small>';
          }
      }
  });

   $('.magnific-gallery').each(function(index , value){
    var gallery = $(this);
    var galleryImages = $(this).data('links').split(',');
      var items = [];
      for(var i=0;i<galleryImages.length; i++){
        items.push({
          src:galleryImages[i],
          title:''
        });
      }
      gallery.magnificPopup({
        mainClass: 'mfp-fade',
        items:items,
        gallery:{
          enabled:true,
          tPrev: $(this).data('prev-text'),
          tNext: $(this).data('next-text'),
          preload: [0,1]
        },
        type: 'image'
      });
  });


  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var next = this.nextElementSibling;
      var content = next.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }


});
