const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

let navbar= document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cartitem.classList.remove('active');
}


let searchform= document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartitem.classList.remove('active');
}


let cartitem= document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartitem.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
   

}
window.scroll = () =>{
   navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartitem.classList.remove('active');
}

