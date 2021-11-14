
$( document ).ready(function() {
    $('.lang-toggle-dropdown').hide();
    $('.lang-toggle-active').click(()=>{
        $('.lang-toggle-dropdown').toggle();
    })
    $('.search-block').hide();
    $('.search-open').click(()=>{
        $('.search-block').show(200);
    })
    $('.search-close').click(()=>{
        $('.search-block').hide(100);
    })

    console.log( "ready!" );

    $('.calendar-month-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        swipe: false,
        dots: false,
    });
    $('.main-left').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        dots: true,
    });
    $('.partners-right').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        dots: true,
        responsive: [
            {
                breakpoint: 592,
                settings: {
                    arrows: false,
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            },
        ]
    });
    $('.games-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows:true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true
    });
    $('.seasons-slider').slick({
        dots: false,
        infinite: true,
        arrows:true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
        ]
    });

    $(".seasons-slide").on("click", function() {
        const index = $(this).attr("data-slick-index");
        $(".seasons-slider").slick("slickGoTo", index);
    });

    $('.header-burger').click(()=>{
        $('.header-main').addClass('active')
    })
    $('.close').click(()=>{
        $('.header-main').removeClass('active')
    })
    const video = document.getElementById("video");
    const circlePlayButton = document.getElementById("circle-play-b");

    function togglePlay() {
        if (video.paused || video.ended) {
            video.play();
        } else {
            video.pause();
        }
    }

    circlePlayButton.addEventListener("click", togglePlay);
    video.addEventListener("playing", function () {
        circlePlayButton.style.opacity = 0;
    });
    video.addEventListener("pause", function () {
        circlePlayButton.style.opacity = 1;
    });

});

