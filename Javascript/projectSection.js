import { projects } from "./data.js";
import {mySkills } from "./data.js";


function loadNextCard() {
    let cardContainer = document.getElementById("card-container");
    projects.forEach((project) => {
        addProjectToPage(project, cardContainer);
    })
}
function addProjectToPage(proj, container) {
    let card = document.createElement('swiper-slide');
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
export { loadNextCard, skillLoader}