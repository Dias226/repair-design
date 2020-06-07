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