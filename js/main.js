const $ = (select) => {
    return document.querySelector(select)
}
const menuBtn = $(".menu-btn")
const burger = $(".menu-btn__burger")
const nav = $(".nav")
const menuNav = $(".menu-nav")
const navItem = document.querySelectorAll(".menu-nav__item")


let showMenu = false
menuBtn.addEventListener("click", () => {
    if(!showMenu) {
        burger.classList.add("open")
        nav.classList.add("open")
        menuNav.classList.add("open")
        navItem.forEach(item => item.classList.add("open"))
        showMenu = true
    }else {
        burger.classList.remove("open")
        nav.classList.remove("open")
        menuNav.classList.remove("open")
        navItem.forEach(item => item.classList.remove("open"))
        showMenu = false
    }
})
