document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".header__bottom-list-btn").forEach(item => {
    item.addEventListener("click", function () {
      // Переменные
      let btn = this;
      let dropdown = this.parentElement.querySelector(".dropdown");

      document.querySelectorAll(".header__bottom-list-btn").forEach(el => {
        //   Если элемент не равен btn
        if (el != btn) {
          el.classList.remove("active");
        }
      });

      document.querySelectorAll(".dropdown").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("active-dropdown");
        }
      })
      dropdown.classList.toggle("active-dropdown");
      btn.classList.toggle("active")
    })
  })

  document.addEventListener("click", function (e) {
    let target = e.target;
    if (!target.closest(".header__bottom-list")) {
      document.querySelectorAll(".dropdown").forEach(el => {
        el.classList.remove("active-dropdown");
      })
      document.querySelectorAll(".header__bottom-list-btn").forEach(el => {
        el.classList.remove("active");
      });
    }
  })
  // Swiper hero
  const swiper = new Swiper('.swiper', {

    slidesPerGroup: 3,
    loop: true,
  })

  const element = document.querySelector('.select');
  const choices = new Choices(element, {
    searchEnabled: false,
    ariaSelected: false,

  });
  // Swiper gallery
  const slider = new Swiper('.gallery__swiper', {
   
    loop: true,
    slidePerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
  });
  // Accord
  $(function () {
    $("#accordion").accordion({
      icons: false,
      heightStyle: "content",
      collapsible: true,
      active: false
    });
  })
  // swiper doing

  const swiper3 = new Swiper('.doing__swiper', {
    loop: true,
    spaceBetween: 50,
    slidesPerGroup: 3,
    

  });


})