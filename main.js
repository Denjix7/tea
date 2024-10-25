let burger = document.querySelector("#burger");
let menu = document.querySelector("#menu");

burger.addEventListener("click",()=>{
    if (menu.classList.contains(".header-burger__none") ==true) {
       menu.classList.remove(".header-burger__none");
    } else{
        menu.classList.add(".header-burger__none");
    }
})