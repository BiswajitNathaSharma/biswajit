import { loadNextCard, skillLoader } from "./projectSection.js";
import { loaderOff, mobileMenuDesign } from "./mobMenuAndLoader.js";


window.addEventListener('load', loaderOff);
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    if (window.pageYOffset > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
        // menu design start
        mobileMenuDesign()
        // project page design start 
        loadNextCard()
        // skill loader 
        skillLoader();
});
