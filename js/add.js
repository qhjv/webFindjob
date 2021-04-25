$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 30) {
            $('.fullnavbar').addClass("sticky");
        } else {
            $('.fullnavbar').removeClass("sticky");
        }
        if($(this).scrollTop() >90 ){
            $(".scroll_top").addClass("scroll_on")
            
        }else {
            
                $(".scroll_top").removeClass("scroll_on")
            
        }
    });
    /*---------menu btn------------*/
    
    $("i.nav-link_plus").on('click',function(){
        $(this).next().slideToggle(500);

    })







    /*---------Feature slide------------*/
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        dots:false,
        nav:true,
        autoplay:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
});