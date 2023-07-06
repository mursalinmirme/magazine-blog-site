$('.owlCarouselOne').owlCarousel({
    loop:true,
    margin:17,
    padding:0,
    items:4,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsiveClass:true,
    autoplay:true,
    slideTransition: 'linear',
    autoplayTimeout:4500,
    autoplaySpeed: 1000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:1,
            loop:true
        }
    }
})
$('.owlCarouselTwo').owlCarousel({
    loop:true,
    margin:17,
    padding:0,
    items:4,
    center:true,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3500,
    autoplaySpeed: 1000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            loop:true
        }
    }
})
