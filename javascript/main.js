// special countdown
let days = document.getElementById("days");
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")

let countdown = ()=>{
    let countdownDate = new Date("September 29, 2024 23:59:59");
    let currentDate = new Date()
    let remainingdays = countdownDate.getDate()-currentDate.getDate();
    let remainingseconds = countdownDate.getSeconds()-currentDate.getSeconds();
    let remainingMinutes = countdownDate.getMinutes()-currentDate.getMinutes();
    let remainingHours = countdownDate.getHours()-currentDate.getHours();
    
    days.innerHTML = remainingdays;
    hours.innerHTML = remainingHours;
    minutes.innerHTML = remainingMinutes;
    seconds.innerHTML = remainingseconds;

}

setInterval(countdown, 1000);


// scroll back to top

function scrollToTop(){
    let scrollTopButton= document.getElementById("scrollTop")
    window.onscroll=()=>{
        var scroll=document.documentElement.scrollTop;
        if(scroll>250){
            scrollTopButton.classList.add("scrollActive")
        }
        else{
            scrollTopButton.classList.remove("scrollActive")

        }
    }
}
scrollToTop()

// nav hide
let navLinks=document.querySelectorAll(".nav-link");
let collapse = document.querySelector(".navbar-collapse.collapse")

navLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        collapse.classList.remove("show")
    })
})