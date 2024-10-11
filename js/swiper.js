var swiper = new Swiper('.banner-swiper',{
    loop:true,
    speed:1000,
    effect: 'cube',
    grabCursor:true,
    cubeEffect:{
        shadow: true,
        slideShadows:true,
        shadowOffset:20,
        shadoeScale:0.94,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
})