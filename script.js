const header = document.querySelector("header");
header.classList.add("header");

const content = header.querySelector("div");
content.classList.add("content");

const logo = content.querySelector("h1");
logo.classList.add("logo");
logo.style.marginLeft = '9vh'

const header__content = content.querySelector("div");
header__content.classList.add("header__content");

const header__menu = header__content.querySelector("menu");
header__menu.classList.add("header__menu");
header__menu.style.justifyContent = 'space-around'


const header__menu_button = header__content.querySelector("button");
header__menu_button.classList.add("header__menu-button");

const main = document.querySelector("main");
main.classList.add("main");

const section = main.querySelector("section");
section.classList.add("gallery");

const gallery__item = section.querySelectorAll("div");
gallery__item.forEach((galleryitem) => {
  galleryitem.classList.add("gallery__item");
});

const gallery__item__image = section.querySelectorAll("img");
gallery__item__image.forEach((itemimage) => {
  itemimage.classList.add("gallery__item__image");
});

const gallery__item__text = section.querySelectorAll("h3, p");
gallery__item__text.forEach((itemtext) => {
  itemtext.classList.add("gallery__item__text");
});

const subscribe = document.querySelector("main > div");
subscribe.classList.add("subscribe");

const subscribe__input = subscribe.querySelector("input");
subscribe__input.classList.add("subscribe__input");

const subscribe__button = subscribe.querySelector("button");
subscribe__button.classList.add("subscribe__button");

const subscribe__text = subscribe.querySelector("p");
subscribe__text.classList.add("subscribe__text");
