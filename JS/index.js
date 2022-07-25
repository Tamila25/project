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
  const params = {
    btnClassName: "js-header-dropdown-btn",
    dropClassName: "js-header-drop",
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
  }

  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(params.disabledClassName, params.activeClassName);
      evt.target.removeEventListener("animationend", onDisable);
    }
  }

  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);

      if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(`.${params.dropClassName}[data-target="${path}"]`);

        btn.classList.toggle(params.activeClassName);

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  }

  setMenuListener();
  // Burger
  document.querySelector('#burger').addEventListener('click',
    function () {
    document.querySelector('#menu').classList.toggle('active')
    })
  document.querySelector('#close-menu').addEventListener('click',
    function () {
    document.querySelector('#menu').classList.toggle('active')
  })

  document.querySelector('#search').addEventListener('click', function () {
    document.querySelector('#search-form').classList.toggle('is-active')
  })
  document.querySelector('#close').addEventListener('click', function () {
    document.querySelector('#search-form').classList.toggle('is-active')
  })

  // Swiper hero
  const swiper1 = new Swiper('.hero__swiper', {
    loop: true,
    allowTouchMove: false,
    effect: 'fade',
    speed: 10000,
    autoplay: {
      delay: 1000
    }
  })

  const element = document.querySelector('.select');
  const choices = new Choices(element, {
    searchEnabled: false,
    ariaSelected: false,

  });
  // Swiper gallery
  const slider = new Swiper('.gallery__swiper', {
    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 15,
    loop: true,

  
   
    navigation: {
      nextEl: ".next",
      prevEl: ".prev"
    },
   
    

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      530: {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 1,
      },
      691: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      }
    },
    pagination: {
      el: '.gallery__swiper-pagination',
      type: 'fraction',
    }

  });




  // Accord
  $(function () {
    $("#accordion").accordion({
     
      heightStyle: "content",
      active: 0
    });
  })
  // swiper doing

  const swiper3 = new Swiper('.doing__swiper', {
    loop: true,
    spaceBetween: 50,
    slidesPerGroup: 3,
    slidesPerView: 3,
    navigation: {
      nextEl: ".doing-next",

    },
    pagination: {
      el: '.doing__swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
        slidesPerGroup: 1,
      },
      426: {
        slidesPerView: 1,
        spaceBetween: 70,
        slidesPerGroup: 1,
      },
      596: {
        slidesPerView: 2,
        spaceBetween: 16,
        slidesPerGroup: 2,
      },
      691: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      820: {
        slidesPerView: 2,
        spaceBetween: 60,
        slidesPerGroup: 2,
      },
      952: {
        slidesPerView: 3,
        spaceBetween: 16,
        slidesPerGroup: 3,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 60,
        slidesPerGroup: 3,
      }
    },


  });
  const swiper4 = new Swiper('.project__swiper', {
    loop: true,
    spaceBetween: 50,
    slidesPerGroup: 3,
    slidesPerView: 3,
    navigation: {
      nextEl: ".project-next",
      prevEl: ".project-prev"
    },

    breakpoints: {
      500: {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 1,
      },
      691: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      820: {
        slidesPerView: 2,
        spaceBetween: 38,
        slidesPerGroup: 2,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      }
    },


  });

  // Map
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("myMap1", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.758468, 37.601088],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 15
    });
    // Создание геообъекта с типом точка (метка).
    var myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point", // тип геометрии - точка
        coordinates: [55.758468, 37.601088]// координаты точки
      }
    });
    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/location-coordinat.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
    })
    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);

  }

 

});