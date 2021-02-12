// DOM
const btnContent = document.querySelector("#btn__content"),
    logoContent = document.querySelector("#logo__content"), 
    primaryBtn = document.querySelector("#primary_btn"), 
    brandLogo = document.querySelector("#brand_logo"), 
    leftToggle = document.querySelector("#left_toggle"),
    cola = document.querySelector("#cola"),
    navLink = document.querySelectorAll("#nav_link"),
    navbar = document.querySelectorAll("#navbar"), 
    navbarList = document.querySelectorAll("#nav_list"), 
    dropNav = document.querySelectorAll("#drop__nav"), 
    dropArr = document.querySelectorAll("#drop__arr"), 
    hamburger = document.querySelector("#hamburger"), 
    MsgCont = document.querySelectorAll("#MsgCont"), 
    msgContent = document.querySelectorAll("#msgContent"), 
    modalToggle = document.querySelector(".modal_toggle"), 
    modalContainer = document.querySelector(".modal_container"), 
    modalBox = document.querySelector(".modal_box"), 
    modalCnl = document.querySelector(".modal_cnl")
// Functions

dropNav.forEach(drop => {
    drop.classList.add("display__close")
})
const handleHamburger = (e) => {
    hamburger.getAttribute("src") == "./assets/icons/hamburger.svg" ? hamburger.setAttribute("src", "./assets/icons/cola_open.svg") : hamburger.setAttribute("src", "./assets/icons/hamburger.svg")
    leftToggle.classList.toggle("mobile__menu-display")
}
const menuFunc = (e) => {
    leftToggle.classList.toggle("left__panel-close")
    logoContent.classList.toggle("display__close")
    btnContent.classList.toggle("display__close")
    primaryBtn.classList.toggle("primary-close")
    navLink.forEach(nav => {
        nav.classList.toggle("nav_link-close")
    })
}
// Events
cola.addEventListener("click", menuFunc)
// leftToggle.addEventListener("mouseenter", colaHoverFunc)
hamburger.addEventListener("click", handleHamburger)
// --------------------------------------------
// })
navbarList.forEach((nav, index) => {
    nav.addEventListener("click", (e)=> {
        const ul = nav.nextElementSibling
        if(ul.classList.contains("drop__nav")){
            ul.classList.toggle("drop__nav-red")
            dropArr[index].classList.toggle("drop__arr-red")
            // 
        }
    })
})


// --------------------------------------------------------------
// --------------------------[LEV1]------------------------------
// --------------------------------------------------------------
const msgShower = (msg, index) => {
    msg.addEventListener("click", () => {
        msgContent[index].classList.toggle("show__msg")
    })
}
const showBox = (message) => {
    message.forEach(msgShower)
}


// Func
modalToggle.addEventListener("click", function(e){
    e.preventDefault()
    modalContainer.classList.add("modal_show")
    modalBox.classList.add("modal_box_show")
})
modalCnl.addEventListener("click", function(){
    modalContainer.classList.remove("modal_show")
    modalBox.classList.remove("modal_box_show")
})
modalContainer.addEventListener("click", function(){
    modalContainer.classList.remove("modal_show")
    modalBox.classList.remove("modal_box_show")
})
// Init
showBox(MsgCont)

