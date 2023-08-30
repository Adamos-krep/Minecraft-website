/*const search = document.querySelector("#search-input");

function Filter(){
    let input = document.querySelector("#search-input").value;
    input = input.toLowerCase();
    let a = document.getElementsByClassName("channels");

    for(b = 0; b < a.length; b++){
        if(!a[b].innerHTML.toLowerCase().includes(input)){
            a[b].style.display = "none";
        }else{
            a[b].style.display = "list-item";
        }
    }
}

search.addEventListener("input", Filter);*/
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("#text").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

const navBar = document.getElementById("nav-bar");
const header = document.querySelector("header");
const Logo = document.getElementById("logo-img");


window.onscroll = function(){onscrollFunction()};

function onscrollFunction(){
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    navBar.style.height = "5em";
    navBar.style.backgroundColor = "black";
    Logo.style.width = "3rem";
    Logo.style.height = "3rem";
  }else{
    Logo.style.width = "5rem";
    Logo.style.height = "5rem";
    navBar.style.height = "10em";
    navBar.style.backgroundColor = "rgb(19, 16, 16)";
  }
}