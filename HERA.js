$(document).ready(function(){
    
    // 헤더영역
    $('.header-area .logo-menu li').mouseenter(function(){
        const tab = $(this).attr('data-alt');
        $('.sub-menu').removeClass('active');
        $(`#${tab}`).addClass('active');

        // 서브메뉴박스 보이게 처리
        $('.sub-menu-box').addClass('active');

        // 로고메뉴 li 들 마우스 엔터&리브 색상 변경
        $('.header-area .logo-menu li a').mouseenter(function(){
            $(this).addClass('active');
        });
        $('.header-area .logo-menu li a').mouseleave(function(){
            $(this).removeClass('active');
        });
        
    });

    // 햄버거버튼 클릭
    $('.header-area .hamberger').click(function(){
        $('.header-area .hamberger span').toggleClass('active');
        
        $('.hbg-box').toggleClass('active');
        
    });

    // 마우스 벗어났을 때 서브메뉴박스 안보이게 처리
    $('.sub-menu-box').mouseleave(function(){
        $(this).removeClass('active');

        
    });
    
    // sec-1, sec-5 슬라이드 영역

    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },

          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
     });

    


        $('.slide-view .btn-right').click(function(){
            $('.slide-view .slide-wrap').animate({
                // 애니메이트는 트렌지션 안걸어도 자연스럽게 넘어감
              left: -362
            },function(){
                $('.slide-view .slide-wrap').css({
                    left: 0
                }).find('.img-box').first().appendTo('.slide-view .slide-wrap');
                // find 를 사용하는 이유는 하위요소의 이미지를 찾는것
                
            });
        });

    
        $(window).scroll(function(){
            const h = $(window).scrollTop();
            console.log(h);

            if(h >= 500 ){
                $('.sec-2 .signature img').addClass('active');
            }else{
                $('.sec-2 .signature img').removeClass('active');
            }
            const j = $(window).scrollTop();
            console.log(j);

            if(j >= 1172 ){
                $('.sec-3 .eaudeparfum img').addClass('active');
            }else{
                $('.sec-3 .eaudeparfum img').removeClass('active');
            }
        });



}); //end