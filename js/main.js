/*
document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);
  
});
*/
//Модальное окно
$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');
  
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  $(document).keyup(function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      modal.removeClass("modal--visible");
    }
  });
  $(".modal").on("click", (event) => {
    var target = event.target;
    if (!target.closest(".modal__dialog")) {
      modal.removeClass("modal--visible");
    }
  });

  var mySwiper = new Swiper('.swiper-container', {
    spaceBetween: 5,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 25 + bullets.width() + 15)
  bullets.css('left', prev.width() + 20)

  new WOW().init();

  //Валидация формы modal
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      // правило-объект
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: {
        required: true
      },
    }, //сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не более пятнадцати букв"
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Введите корректный номер телефона" 
      },
      
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      policyCheckbox: {
        required: "Примите соглашение"
      },
    }
  });

  //Валидация формы control
  $('.control__form').validate({
    errorClass: "invalid",
    rules: {

      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      controlCheckbox: {
        required: true
      },
      // правило-объект
      
    }, //сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не более пятнадцати букв"
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Введите корректный номер телефона"
      },
      controlCheckbox: {
        required: "Примите соглашение"
      },
      
      
    }
  });

  //Валидация формы footer
  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {

      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      userQuestion: "required",

      footerCheckbox: {
        required: true
      },
      
    }, //сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не более пятнадцати букв"
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Введите корректный номер телефона"
      },
      userQuestion: "Заполните поле",

      footerCheckbox: {
        required: "Примите соглашение"
      },
    },
    
  });

  // маска для телефона

  $('[type=tel]').mask('+7(000) 000-00-00');

});

//кнопка прокрутки
function backToTop() {
  let button = $('.back-to-top');

  $(window).on('scroll', () => {
    if ($(this).scrollTop() >= 50) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });

  button.on('click', (e) => {
    e.preventDefault();
    $('html').animate({scrollTop: 0}, 1000);
  })
  
}

backToTop();

// создаём элемент <div>, который будем перемещать вместе с указателем мыши пользователя
var mapTitle = document.createElement('div'); mapTitle.className = 'mapTitle';
// вписываем нужный нам текст внутрь элемента
mapTitle.textContent = 'Для активации карты нажмите по ней';
// добавляем элемент с подсказкой последним элементов внутрь нашего <div> с id wrapMap
wrapMap.appendChild(mapTitle);
// по клику на карту
wrapMap.onclick = function () {
  // убираем атрибут "style", в котором прописано свойство "pointer-events"
  this.children[0].removeAttribute('style');
  // удаляем элемент с интерактивной подсказкой
  mapTitle.parentElement.removeChild(mapTitle);
}
// по движению мыши в области карты
wrapMap.onmousemove = function (event) {
  // показываем подсказку
  mapTitle.style.display = 'block';
  // двигаем подсказку по области карты вместе с мышкой пользователя
  if (event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
  if (event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
}
// при уходе указателя мыши с области карты
wrapMap.onmouseleave = function () {
  // прячем подсказку
  mapTitle.style.display = 'none';
}