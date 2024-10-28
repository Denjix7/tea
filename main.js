let burger = document.querySelector("#burger");
let menu = document.querySelector("#menu");
let close=document.querySelector("#close")

burger.addEventListener("click",()=>{
    if (menu.classList.contains("sub-menu-none") ==true) {
       menu.classList.remove("sub-menu-none");
    } else{
        menu.classList.add("sub-menu-none");
    }
})

close.addEventListener("click",()=>{
    if (menu.classList.contains("sub-menu-none") ==true) {
       menu.classList.remove("sub-menu-none");
    } else{
        menu.classList.add("sub-menu-none");
    }
})