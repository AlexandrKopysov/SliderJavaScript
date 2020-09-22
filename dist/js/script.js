$(document).ready(function () {
    $('.slider').slick({
        //    arrows:false;
        dots:true,
        adaptiveHeight:true,
        // Количество слайдов, показанных за раз
        slidesToShow:3,
        // Количество слайдов, прокручиваемых за раз    
        slidesToScroll:1,
        // Скорость пролистывания слайдов
        speed:400,
        // тип анимации
        easing:'ease',
        // Бесконечная прокрутка
        infinite:true, 
        // Автоматическая прокрутка слайдов
        autoplay:false,
        // Скорость прокрутки
        autoplaySpeed:4000,
        // Пауза при фокусе
        pauseOnFocus: true,
        // Пауза при наведении
        pauseOnHover:true,
        // Пауза при наведении на точки управления
        pauseOnDotsHover:true,
        // Отключение свайпа на десктопе
        draggable:true,
        // Отключение свайпа на мобильниках
        swipe:true,
        // Момент срабатывания слайда
        touchThreshold:10,
        // Слайды нельзя тянуть
        touchMove:false,
        // Быстро пролистывать слайды
        waitForAnimate:false,
        // Центрирование главного слайда
        centerMode:false,

        variableWidth:false,
        
        asNavFor:".sliderbig",
        // Если разрешение  меньше 768 , то показывать только 2 слайда
        responsive:[
            {
                breakpoint:768,
                settings:{
                    slidesToShow:2
                }
            }
        ],
        // Переместить стрелки управления в другой блок
        appendArrows:$('.content'),
        
    });
    $('.sliderbig').slick({
        arrows:false,
        fade:true,
        asNavFor:".slider",
    })
});

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

