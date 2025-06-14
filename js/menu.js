const menuButton = document.getElementById("menu-button");
const menuMobile = document.getElementById("ul-menu-mobile")

const menuMobileActivation = () => {
  let checker = menuMobile.classList.contains("active")

  if(!checker){
    menuMobile.classList.add("active")
  }else{
    menuMobile.classList.remove("active")
  }

  console.log(checker)
}