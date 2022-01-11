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

    // 탭메뉴 (+ tab버튼을 눌렀을 때 웹표준을 준수하기 위한 스크립트)
    // 변수 = 데이터 저장소
    let $tab_list = $(".tab_menu");

    $tab_list.find("ul ul").hide();
    $tab_list.find("li.active > ul").show();

    function tabMenu(e) {
        e.preventDefault();
        let $this = $(this);
        $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
    }

    $tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

    // 갤러리
    $(".gallery_img").slick({
        arrows: false,
        fade: true,
        pauseOnHover: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 150,
        slidesToShow: 1
    });

    $(".paly").click(function(){
        $(".gallery_img").slick("slickPlay");
    });

    $(".pause").click(function(){
        $(".gallery_img").slick("slickPause");
    });

    $(".prev").click(function(){
        $(".gallery_img").slick("slickPrev");
    });

    $(".next").click(function(){
        $(".gallery_img").slick("slickNext");
    });

    // 레이어 팝업
    $(".layer").click(function(e){
        e.preventDefault();
        // $("#layer").css("display","block");
        // $("#layer").show();
        // $("#layer").fadeIn();
        $("#layer").slideDown();
    });

    $("#layer .close").click(function(e){
        e.preventDefault();
        // $("#layer").css("display","none");
        $("#layer").hide();
        // $("#layer").fadeOut();
        // $("#layer").slideUp();
    });

    // 윈도우 팝업
    $(".window").click(function(e){
        e.preventDefault();
        // window.open("파일명", "팝업이름", "옵션설정")
        // 옵션 : top, left, width, status, toolbar, location, menubar, scrollbars, fullscreen 사용가능
        
        window.open("popup.html","popup01", "width=800, height=590, top=50, left=50, scrollbars=0, toolbar=0, menubar=0");
    });

    // 라이트 박스 npm 인스톨 필요
//     $(".lightgallery").lightgallery({
//         thumbnail: true,
//         autoplay: true,
//         pause: 3000,
//         progressBar: true
//     });
})