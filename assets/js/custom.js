$(function () {
   // Main Hero Slider
    var swiper = new Swiper(".heroSlider", {
        spaceBetween: 30,
        centeredSlides: true,
        effect: "fade",
        autoplay: {
          delay: 5500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

  // Event Gallery Slider
    var swiper = new Swiper(".eventGallery", {
      spaceBetween: 20,
      centeredSlides: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-event-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });



   var swiper = new Swiper(".brandSwipper", {
      slidesPerView: 4,
      spaceBetween: 30,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        240: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        570: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });


// Event Timer Part Start
var countDownDate = new Date("april 7, 2024 15:37:25").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById("time1").innerHTML = days + "<span>" + "Days" + "<span>";

document.getElementById("time2").innerHTML = hours + "<span>" + "Hours" + "<span>";
document.getElementById("time3").innerHTML =  minutes  + "<span>" + "Mins" + "<span>";
document.getElementById("time4").innerHTML =seconds + "<span>" + "Sec " + "<span>";
if (distance < 0) {
  clearInterval(x);
  document.getElementById("time").innerHTML = "EXPIRED";
}
},0);
});



/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});


// Aos Animation
AOS.init();

// countup
$('.count-number').countUp();


