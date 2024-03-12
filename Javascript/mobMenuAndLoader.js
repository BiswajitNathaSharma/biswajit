import {mySkills } from "./data.js";
import gsapAnimation from "./gsap.js"

let isMobile = window.matchMedia("(max-width: 700px)").matches;
function loaderOff() {

if (isMobile) {
    document.querySelector("#cart-messaage").innerHTML = `Use large screen for better experiance &nbsp; :&nbsp;)`;
}
    document.body.style.overflow = 'hidden';
    const loader = document.querySelector('.loader-container');
    setTimeout(() => {
        loader.style.display = 'none';
        document.body.style.overflow = 'visible';
        if (loader.style.display === 'none') {
            gsapAnimation()
        }
        // skill loader
        skillLoader()
    }, 1000);
}
function skillLoader() {
    const skill_container = document.getElementById("skill-container");
    mySkills.forEach(object => {
        const card = document.createElement("div");

        card.classList.add("indivisual-skills");
        const skill = document.createElement("div");
        skill.classList.add("skill");

        const skillImg = document.createElement("img");
        skillImg.src = object.ImgSrc;
        skillImg.alt = object.alt;
        skill.appendChild(skillImg);

        const descriptionElement = document.createElement("label");
        descriptionElement.textContent = object.skillName;

        // Append the skill to the card
        card.appendChild(skill);
        card.appendChild(descriptionElement);


        // Append the card to the container
        skill_container.appendChild(card);
    });
}
function mobileMenuDesign() {
    const overlay = document.querySelector('.overlay');
    const checkbox = document.querySelector('#menu');

    const menu = document.querySelectorAll('.menu');
    menu.forEach((element) => {
        let elechild = element.children;
        for (let i = 0; i < elechild.length; i++) {
            elechild[i].addEventListener('click', () => {
                checkbox.checked = false;
                overlay.style.display = 'none';
            })
        }
    });
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            overlay.style.display = 'block';
        } else {
            overlay.style.display = 'none';
        }
    });
}

export {loaderOff, mobileMenuDesign}