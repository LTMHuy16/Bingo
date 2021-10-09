/*========================================== 
  Sticky Navbar
============================================
*/
  window.addEventListener("scroll", function () {
    var header = document.querySelector('header');
    header.classList.toggle('sticky-header', window.scrollY > 100);
  });

/*========================================== 
  Navbar Fixed right
============================================
*/
var navBtn = document.querySelector('.navbar-toggler');
var navbar = document.querySelector('#navigation');

document.querySelector('.closeBtn').addEventListener("click", function () {
  navbar.classList.remove('show');
  navBtn.setAttribute("aria-expanded", "false");
})




/*========================================== 
  Hero Slider
============================================
*/
  $('.hero-slider').slick({
    autoplay: false,
    infinite: true,
    arrows: true,
    nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
    prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
    autoplaySpeed: 8000,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrows: false
        }
      }
    ]
  });

/*========================================== 
  Testimonial Slider
============================================
*/
  $('.testimonial-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });


/*========================================== 
  Clients Logo Slider
============================================
*/

$('.client-logo-slider').slick({
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
      }
    }
  ]
});

/*========================================== 
  Filter Portfolio
============================================
*/

var filterizd = $('.filtr-container').filterizr({});

