$(document).ready(function () {
    //SLIDER
    $('.slider').slick({
        infinite: true,
        autoplay: true,
        dots: false,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 1720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                }
            }
        ]
    });
    //Modal
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('[data-modal=thanks]').on('click', function () {
        $('.overlay, #thanks').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks').fadeOut('slow');
    });
});


// TABS-JS
let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        // создаем переменную в которой запишем имя активного таба
        tabName;
    // добавляем слушателя на каждый item
    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });
    function selectTabNav() {
        // удаляем класс
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        // элементу this(на которой клик) добавим класс
        this.classList.add('is-active');
        // получаем data атрибут активного элемента 
        tabName = this.getAttribute('data-tab-name');
        // вызыввем функцию и передаем значение tabName
        selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            // Проверяем наличие класса = атрибуту tabName
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }

};

tab();

//BURGER MENU
const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1);

const body = document.body;

hamb.addEventListener('click', hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle('open');
    body.classList.toggle("noscroll");
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}

//e-mail
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainForm.addEventListener("submit", function (event) {
    if (emailTest(mainFormInput)) {
        mainFormInput.parentElement.insertAdjacentHTML(
            "beforeend",
            `<div class="main-form__error">
                Некорректный email
            </div>`
        );
        event.preventDefault();
    }
});

mainFormInput.addEventListener("focus", function (event) {
    if (mainFormInput.nextElementSibling) {
        mainFormInput.nextElementSibling.remove();
    }
});

//Функция теста email
function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}