const data = [
  {
    head3: "Discover innovative ways to decorate",
    para: " We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringingyour vision to life. Create a room in your own style with our collectionand make your property a reflection of you and what you love.",
    image: "./images/mobile-image-hero-1.jpg",
  },

  {
    head3: "We are available all across the globe",
    para: " With stores all over the world, it's easy for you to find furniture for  your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    image: "./images/mobile-image-hero-2.jpg",
  },

  {
    head3: "Manufactured with the best materials",
    para: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    image: "./images/mobile-image-hero-3.jpg",
  },
];

const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");

const img1 = document.querySelector(".img1");
rightBtn.addEventListener("click", () => {
  img1.style.marginLeft = `-100%`;
  console.log(img1.style.marginLeft);
});
leftBtn.addEventListener("click", () => {
  img1.style.marginLeft = `100%`;
  console.log(img1.style.marginLeft);
});

//Menu down
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  // menu.classList.add('menu_down')
  menu.classList.remove("menu_up");
});
const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
  menu.classList.add("menu_up");
});
