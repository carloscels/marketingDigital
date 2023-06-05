const header= document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY > 90)
});

let menu = document.querySelector(".menuIcon");
let navlist = document.querySelector(".navlist");

menu.onclick = ()=>{
  navlist.classList.toggle("active");
  header.classList.toggle("sticky", "active");
}
window.onscroll = () =>{
navlist.classList.remove("active");
}

