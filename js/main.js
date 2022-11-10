var swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});


$(function(){

    //슬라이더-slick
    $('.sliders').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,         
        easing:'swing',
        initialSlide:4,           
        speed:400,                  
        swipe:true,              
    });

	$('.slider_z').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,         
        easing:'swing',
        initialSlide:4,           
        speed:200,                  
        swipe:true,              
    });

});

//햄버거 버튼을 클릭하면
$('.open_gnb').click(function(){
    $(this).toggleClass('open');
    $('.gnb').slideToggle();
});



