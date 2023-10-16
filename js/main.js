const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
}   else {
    document.body.classList.add('_pc');
}

// ---------------------------------------------------------

new Swiper ('.two-block__slider', {
    // бесконечный слайдер
    loop: true,

    // количество дублирующих слайдов
    // loopedSlides: 0,

    // автопрокрутка
    // autoplay: {
    //     delay: 9000,
    // },

    // скорость
    speed: 800,

    // адаптивность
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        991.98: {
            slidesPerView: 3,
        }
    },

    // стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    // круглые кнопки  
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    // автовысота
    autoHeight: true,

    // количество слайдов для показа
    // slidesPerView: 2.3,

    // отступы между слайдами
    spaceBetween: 30,

    // количество пролистываемых слайдов
    slidesPerGroup: 1,
});

// ------------------------------------------------------

const menuIcon = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.header__menu')

if (menuIcon) {
    menuIcon.addEventListener('click', function(e) {
        menuIcon.classList.toggle('active')
        menuBody.classList.toggle('active')
        document.body.classList.toggle('lock')
       
    })
}