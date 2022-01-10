$(document).ready(function(){
    // 버튼을 클릭하면 전체 메뉴를 보이게 하기
    $(".tit .btn").click(function(e){
        e.preventDefault();
        // 클릭했을 때 a태그의 '#' 때문에 맨 위로 올라가는 현상을 없애주는 방법

        // $("#cont_nav").css("display","block");
        //css에서 #cont_nav {display: block;} 같은 효과

        // 여러가지 메소드들
        // $("#cont_nav").show();
        // $("#cont_nav").fadeIn();
        // $("#cont_nav").slideDown();

        // $("#cont_nav").toggle();
        // $("#cont_nav").fadeToggle();

        $("#cont_nav").slideToggle(200);
        $(this).toggleClass("on");
        // this는 자기 자신을 지정할 때 사용
    });

    // 배너 (HTML 마크업 셋팅 -> CSS 연동 -> jQuery 연동 -> jQuery 호출)
    $('.ban').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
      });
})