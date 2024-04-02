    let burger = document.getElementById("burger")
    let cancel = document.getElementById("cancel")
    let burger_menu = document.getElementById("burger_menu")



//---------------------------------------------- Burger.js start -------------------------------------------

burger.onclick = () => {
    burger_menu.classList.add("burger_menu_active")
    right2.classList.add("right_hide")
}

cancel.onclick = () => {
    burger_menu.classList.remove("burger_menu_active")
    right2.classList.remove("right_hide")
}

//---------------------------------------------- Burger.js end -------------------------------------------





//---------------------------------------------- slider.js start -------------------------------------------

let image = document.getElementsByClassName("image")
let sliderValue = 1


left_btn.onclick = () => {
    if (sliderValue < image.length) {
        slider.style.transform = `translateX(-${sliderValue * 1407.5}px)`
        sliderValue++;
    } else {
        slider.style.transform = `translateX(0vw)`
        sliderValue = 1;
    }
}

right_btn.onclick = () => {

        slider.style.transform = `translateX(-${(sliderValue -2 ) * 1407.5}px)`
        sliderValue--;
}



//---------------------------------------------- slider.js end -------------------------------------------









//---------------------------------------------- highlights.js end -------------------------------------------

let highlights_news_menu = document.getElementById("highlights_news_menu") 
let highlights_mobile_menu = document.getElementById("highlights_mobile_menu") 
let highlights_tv_menu = document.getElementById("highlights_tv_menu") 
let highlights_appliances_menu = document.getElementById("highlights_appliances_menu") 
let highlights_galaxy_menu = document.getElementById("highlights_galaxy_menu") 


highlights_news_btn.onclick = () => {
    highlights_news_menu.classList.remove("hide_menu")
    highlights_news_menu.classList.add("show_menu")
    highlights_mobile_menu.classList.remove("show_menu")
    highlights_tv_menu.classList.remove("show_menu")
    highlights_appliances_menu.classList.remove("show_menu")
    highlights_galaxy_menu.classList.remove("show_menu")
}


highlights_mobile_btn.onclick = () => {
    highlights_mobile_menu.classList.add("show_menu")
    highlights_news_menu.classList.add("hide_menu")
    highlights_tv_menu.classList.remove("show_menu")
    highlights_appliances_menu.classList.remove("show_menu")
    highlights_galaxy_menu.classList.remove("show_menu")
}

highlights_tv_btn.onclick = () => {
    highlights_tv_menu.classList.add("show_menu")
    highlights_news_menu.classList.add("hide_menu")
    highlights_mobile_menu.classList.remove("show_menu")
    highlights_appliances_menu.classList.remove("show_menu")
    highlights_galaxy_menu.classList.remove("show_menu")
}

highlights_appliances_btn.onclick = () => {
    highlights_appliances_menu.classList.add("show_menu")
    highlights_news_menu.classList.add("hide_menu")
    highlights_tv_menu.classList.remove("show_menu")
    highlights_mobile_menu.classList.remove("show_menu")
    highlights_galaxy_menu.classList.remove("show_menu")
}

highlights_galaxy_btn.onclick = () => {
    highlights_galaxy_menu.classList.add("show_menu")
    highlights_news_menu.classList.add("hide_menu")
    highlights_appliances_menu.classList.remove("show_menu")
    highlights_tv_menu.classList.remove("show_menu")
    highlights_mobile_menu.classList.remove("show_menu")
}







//---------------------------------------------- highlights.js end -------------------------------------------