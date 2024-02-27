// array of skills
const mySkills = [
    {
        skillName: "HTML5",
        ImgSrc: "./images/html_icon.png",
        alt: "HTML Icon"
    },
    {
        skillName: "CSS",
        ImgSrc: "./images/css.png",
        alt: "Cascading Style Sheets"
    },
    {
        skillName: "JavaScript",
        ImgSrc: "./images/js.png",
        alt: "javascript icon"
    },
    {
        skillName: "React",
        ImgSrc: "./images/react.png",
        alt: "React Logo"
    },
    {
        skillName: "Node JS",
        ImgSrc: "./images/nodeJs.png",
        alt: "NodeJS Logo"
    },
    {
        skillName: "Tailwind",
        ImgSrc: "./images/tailwind.png",
        alt: "tailwind Logo"
    },
    {
        skillName: "Git",
        ImgSrc: "./images/git.png",
        alt: "Git Logo"
    },
    {
        skillName: "My SQL",
        ImgSrc: "./images/mysql_icon.png",
        alt: "mysql Logo"
    },
    {
        skillName: "Mongo DB",
        ImgSrc: "./images/mongodb_icon.png",
        alt: "mongo db Logo"
    },

]
const fullProjects = [
    {
        projectName: "Fiziks Chamber",
        description: `Fiziks Chamber is an innovative frontend project designed to promote a local physics coaching center. Highlighting an engaging 'Hall of Frame' page, it captivates users with its attractive design. With seamless device responsiveness and robust contact form validation, users can easily interact with the platform. Notably, messages submitted through the contact form are directly forwarded to the administrators via Elastic Mail, ensuring efficient communication.`,
        techStack: ["HTML5"," CSS3"," Javascript"," git"],
        sourceCode: `https://github.com/BiswajitNathaSharma/fiziksChamber`,
        liveDeployment: `https://biswajitnathasharma.github.io/fiziksChamber/`,
        ImgSrc: `./images/fiziksChamber.png`
    }
]
const miniProjects = [
    {
        projectName: "Todo app",
        description:  `A streamlined todo list application, enabling users to efficiently manage their daily tasks. Utilizing local storage, the app ensures continuity by preserving tasks even after webpage refresh. Users can seamlessly add, update, and delete todos, enhancing productivity and organization. With its intuitive interface, staying on top of tasks has never been easier. Experience hassle-free task management with our simple yet effective todo list app.` ,
        techStack : ["React"," JavaScript"," Tailwind"," inspirobot API"],
        sourceCode: `https://github.com/BiswajitNathaSharma/your-own-todo`,
        liveDeployment:`https://biswajitnathasharma.github.io/your-own-todo/`,
        ImgSrc: `./images/todo.png`
    }
]
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    if (window.pageYOffset > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function (event) {
    // moving main 
    document.querySelector(".moving-image").classList.add("move");
    document.querySelector(".main-left").classList.add("move-left");

    // skill loader 
    skillLoader()

    
    // menu design start
    const checkbox = document.querySelector('#menu');
    
    const overlay = document.querySelector('.overlay');
    const menu = document.querySelectorAll('.menu');
    menu.forEach((element)=>{
        let elechild= element.children;
        for(let i=0;i<elechild.length;i++){
            elechild[i].addEventListener('click',()=>{
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
// menu design end 
fullProjectsLoader()

const projectCheckbox = document.querySelector('#checkbox');
projectCheckbox.addEventListener('change', () => {
    if (!projectCheckbox.checked) {
        fullProjectsLoader();
        projectCheckbox.checked = false;
    } else if(projectCheckbox.checked) {
        miniProjectsLoader();
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
function clearContainer(){
    let parent = document.getElementById("card-container");
    while (parent.hasChildNodes())
      parent.removeChild(parent.firstChild)
}
function fullProjectsLoader(){
    clearContainer()
    let cardContainer = document.getElementById("card-container");
    fullProjects.forEach((project)=>{
        addProjectToPage(project,cardContainer);
    })
}
function miniProjectsLoader(){
    clearContainer()
    let cardContainer = document.getElementById("card-container");
    miniProjects.forEach((project)=>{
        addProjectToPage(project,cardContainer);
    })
}
function addProjectToPage(proj,container){
    let card=document.createElement('div');
    card.classList.add('project-card');
    const defaultImage = './images/abouttt.png';
    const imgUrl = proj.ImgSrc?proj.ImgSrc:defaultImage;
    card.style.backgroundImage= `url('${imgUrl}')`; 
    
    let cardContent=document.createElement('div');
    cardContent.classList.add('card-content');
    let techStack = proj.techStack.map((tech)=>`${tech}`);
    cardContent.innerHTML=`
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


