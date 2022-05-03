$('.owl-carousel').owlCarousel({
    loop:true,
    fadeOut: true,
    lazyLoad: true,
    margin:10,
    nav:false,
    animateOut: 'fadeOut',
    items:4,
    margin:10,
    stagePadding:30,
    smartSpeed:450,
    lazyLoad:true,
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
