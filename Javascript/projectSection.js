import { fullProjects, miniProjects } from "./data.js";

let isMobile = window.matchMedia("(max-width: 700px)").matches;
let currentIndex = 0;
let isFullProjects = true; 
function projectSectionLoader() {
    clearContainer();
    checkIsMobileOrNot()
    projectToggleBtn()
    loadMoreProject()
}
function checkIsMobileOrNot(){
    if (isMobile) {
        loadNextCardMobile();
        document.getElementById("projectLoadBtn").style.display = "block";
    }
    else {
        document.getElementById("projectLoadBtn").style.display = "none";
        loadNextCard();
    }
}
function loadMoreProject(){
    document.getElementById("projectLoadBtn").addEventListener("click", function () {
    if (isMobile) {
        loadNextCardMobile()
    }
});}
function projectToggleBtn(){ 
    document.getElementById("checkbox").addEventListener("change", function () {
    isFullProjects = !isFullProjects; // Toggle between full and mini projects
    clearContainer();
    currentIndex = 0; // Reset the index
    checkIsMobileOrNot()
});
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
function clearContainer() {
    let parent = document.getElementById("card-container");
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
        document.getElementById("final-page").style.display = "none";
    }
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

export {projectSectionLoader}