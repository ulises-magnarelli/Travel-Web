const header = document.querySelector("header");
const navlist = document.querySelector(".navlist");
const menu = document.querySelector("#menu-icon");


window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60)
})


menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}


window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}