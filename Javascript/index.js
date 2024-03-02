import { fullProjects, miniProjects, mySkills } from "./data.js";

let isMobile = window.matchMedia("(max-width: 700px)").matches;
if (isMobile) {
    document.querySelector("#cart-messaage").innerHTML = `Use large screen for better experiance &nbsp; :&nbsp;)`;
}

function loaderOff() {
    document.body.style.overflow = 'hidden';
    const loader = document.querySelector('.loader-container');
    setTimeout(() => {
        loader.style.display = 'none';
        document.body.style.overflow = 'visible';
        if (loader.style.display === 'none') {
            document.querySelector(".moving-image").classList.add("move");
            document.querySelector(".main-left").classList.add("move-left");
            // skill loader
            skillLoader()
        }
    }, 1000);
}
window.addEventListener('load', loaderOff);
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    if (window.pageYOffset > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function (event) {
    // menu design start
    const checkbox = document.querySelector('#menu');

    const overlay = document.querySelector('.overlay');
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
    let currentIndex = 0; 
    let isFullProjects = true;
    clearContainer();
    clearContainer();
    if (isMobile) {
        loadNextCardMobile();
        document.getElementById("projectLoadBtn").style.display = "block";
    }
    else {
        document.getElementById("projectLoadBtn").style.display = "none";
        loadNextCard();
    }

    document.getElementById("checkbox").addEventListener("change", function () {
        isFullProjects = !isFullProjects; // Toggle between full and mini projects
        clearContainer();
        currentIndex = 0; // Reset the index
        if (isMobile) {
            loadNextCardMobile();
        }
        else loadNextCard();
    });

    function clearContainer() {
        let parent = document.getElementById("card-container");
        while (parent.hasChildNodes()) {
            parent.removeChild(parent.firstChild);
            document.getElementById("final-page").style.display = "none";
        }
    }

    function loadNextCardMobile() {
        let cardContainer = document.getElementById("card-container");
        let projects = isFullProjects ? fullProjects : miniProjects;
        if (currentIndex < projects.length) {
            addProjectToPage(projects[currentIndex], cardContainer);
            currentIndex++; // Increment the index
        } else {
            // Show final message when all cards are loaded
            document.getElementById("final-page").style.display = "block";
        }


    }
    function loadNextCard() {
        let cardContainer = document.getElementById("card-container");
        let projects = isFullProjects ? fullProjects : miniProjects;
        projects.forEach((project) => {
            addProjectToPage(project, cardContainer);
        })
    }




    document.getElementById("projectLoadBtn").addEventListener("click", function () {
        if (isMobile) {
            loadNextCardMobile()
        }
    });


});

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
function addProjectToPage(proj, container) {
    let card = document.createElement('div');
    card.classList.add('project-card');
    const defaultImage = './images/abouttt.png';
    const imgUrl = proj.ImgSrc ? proj.ImgSrc : defaultImage;
    card.style.backgroundImage = `url('${imgUrl}')`;

    let cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    let techStack = proj.techStack.map((tech) => `${tech}`);
    cardContent.innerHTML = `
    <h2>${proj.projectName}</h2>
    <p>${proj.description}</p>
    <h4>Techstack: <span id="tech-stack">${techStack}</span></h4>
    <span class="project-links">
        <a href="${proj.sourceCode}">
        <i class="fa-brands fa-github"></i>
        </a>
        <a href="${proj.liveDeployment}">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </a>
        </span>
    `;
    let cards = container.appendChild(card)
    cards.appendChild(cardContent);
}


