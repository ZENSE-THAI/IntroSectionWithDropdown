// window.onscroll = function() {
//     const nav = document.querySelector("[data-navbar]"); 
//     nav.classList.toggle('active',window.scrollY > 50)
//   };


const navLinks = document.querySelectorAll(".nav__links li")
const mobileLink = document.querySelectorAll(".mobile__links li")
const menuBtn = document.querySelector("[data-mobile-btn]")
const mobileMenu = document.querySelector("[data-mobile-menu]")
const overflow = document.querySelector("[data-overflow]")


menuBtn.addEventListener("click" , () => {
    const icon = document.querySelector("[data-btn-img]")
     menuBtn.classList.toggle("active-btn")
     mobileMenu.classList.toggle("active-menu")
     overflow.classList.toggle("active-menu")

     if (menuBtn.classList.contains("active-btn")) {
        icon.src = "./images/icon-close-menu.svg"
     } else {
        icon.src = "./images/icon-menu.svg"
     }
})

navLinks.forEach((link) => {
    const subMenu = link.querySelector("[data-sub-nav]")
    link.addEventListener("click" , () => {
        link.classList.toggle("active")
        subMenu.classList.toggle("active-menu")
    })
})


mobileLink.forEach((link) => {
    const subMenu = link.querySelector("[data-sub-mobile]")
    link.addEventListener("click" , () => {
        link.classList.toggle("active")
        subMenu.classList.toggle("active-menu")
    })
})


