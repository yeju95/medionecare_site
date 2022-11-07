var swiper = new Swiper(".swiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".tenth_section.swiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 10000,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplaySpeed: 2000,
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

function initMap() {
  const myLatLng = {  
      lat:37.500148845880915, 
      lng:127.02895351272205
  }
  //위도(latitude), 경도(longitude)

  const map = new google.maps.Map(document.getElementById("map"), {
      center: myLatLng,
      zoom: 18,  //확대된 상태 1~20     
  });
  //구글 API map에 들어있는 Map함수 실행

  const marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
  }); 
  //마커표시
}

//햄버거 버튼을 클릭하면
$('.open_gnb').click(function(){
    $(this).toggleClass('open');
    $('.gnb').slideToggle();
});

