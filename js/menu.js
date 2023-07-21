const menuButton = document.getElementById("menu-button")
const menuMobile = document.querySelector(".menu-mobile ul")
const closeButtonMenuMobile = document.querySelector(".close-button")

menuButton.addEventListener("click", () => {
  menuMobile.style.transform = "translateX(0%)"
})

closeButtonMenuMobile.addEventListener("click", () => {
  menuMobile.style.transform = "translateX(100%)"
})