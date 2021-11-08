burger = document.querySelector(".burger");
navbar = document.querySelector("navbar");
navList = document.querySelector(".nav-List");
rightNav = document.querySelector(".rightNav");

burger.addEventlistner("click", () => {
  rightNav.classList.toggle("v-class-resp");
  nav-navList.classList.toggle("v-class-resp");
  navbar.classList.toggle('h-nav-resp');

})