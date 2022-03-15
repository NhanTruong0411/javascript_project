


//=================================================Animate Effect Webpage========================================================
//Hàm scroll to top khi click vào button góc dưới phải, đồng thời cập nhập lại trạng thái của navbar.
export var goToTop = function() {
  $('.js-gotop').on('click', function(event){
    $('html, body').animate({
      scrollTop: $('html').offset().top
    }, 1500, 'easeInOutExpo');
    return false;
  });

  $(window).scroll(function(){
    var $win = $(window);
    if ( $win.scrollTop() > 100 ) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });
};

//Hàm contentWayPoint dùng để add animate mỗi khi scroll đúng vào 75% chiều cao của element
export var contentWayPoint = function() {
  
  $('.animate-box').waypoint( function( direction ) {

    if( direction === 'down' ) {

      $(this.element).addClass('item-animate');
      setTimeout(function(){

        $('body .animate-box.item-animate').each(function(k){
          var el = $(this);
          
          setTimeout( function () {
            var effect = el.data('animate-effect');
            if ( effect === 'fadeIn') {
              el.addClass('fadeIn animated-fast');
            } else if ( effect === 'fadeInLeft') {
              el.addClass('fadeInLeft animated-fast');
            } else if ( effect === 'fadeInRight') {
              el.addClass('fadeInRight animated-fast');
            } else {
              el.addClass('fadeInUp animated-fast');
            }

            el.removeClass('item-animate');
          },  k * 200, 'easeInOutExpo' );
        });
        
      }, 100);
      
    }

  } , { offset: '75%' } );
};