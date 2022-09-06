$(function () {
  $(".feature__space-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    Infinity: true,
  });
  const menu = document.querySelector(".menu__list");
  const burger = document.querySelector(".menu__btn");
  const body = document.querySelector("body");
  burger.onclick = () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
    body.classList.toggle("active");
  };
});
