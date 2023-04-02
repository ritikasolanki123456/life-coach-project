// active navbar
$(function(){
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 10){
            $('.navigation-wrap').addClass('scroll-on');
        }else{
            $('.navigation-wrap').removeClass('scroll-on');
        }
    })
})
$(function(){
    $('.navbar-toggler').on('click', function(){
        $('.navigation-wrap').addClass('scroll-on');
    })
})
// nav hide
$('.nav-link').on('click', function(){
    $('.navbar-collapse').collapse('hide');
})

// active scroll indicator

// animation
AOS.init({
    // disable: 'mobile'
});



// owl carousel
$('.blog-slider').owlCarousel({
    loop:true,
    margin:0,
    outoplay:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        1366:{
            items:1
        }
    }
})

