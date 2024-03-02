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
        techStack: ["HTML5", " CSS3", " Javascript", " git"],
        sourceCode: `https://github.com/BiswajitNathaSharma/fiziksChamber`,
        liveDeployment: `https://biswajitnathasharma.github.io/fiziksChamber/`,
        ImgSrc: `./images/fiziksChamber.png`
    },
    {
        projectName: "Fiziks Chamber",
        description: `Fiziks Chamber is an innovative frontend project designed to promote a local physics coaching center. Highlighting an engaging 'Hall of Frame' page, it captivates users with its attractive design. With seamless device responsiveness and robust contact form validation, users can easily interact with the platform. Notably, messages submitted through the contact form are directly forwarded to the administrators via Elastic Mail, ensuring efficient communication.`,
        techStack: ["HTML5", " CSS3", " Javascript", " git"],
        sourceCode: `https://github.com/BiswajitNathaSharma/fiziksChamber`,
        liveDeployment: `https://biswajitnathasharma.github.io/fiziksChamber/`,
        ImgSrc: `./images/fiziksChamber.png`
    },
    {
        projectName: "Fiziks Chamber",
        description: `Fiziks Chamber is an innovative frontend project designed to promote a local physics coaching center. Highlighting an engaging 'Hall of Frame' page, it captivates users with its attractive design. With seamless device responsiveness and robust contact form validation, users can easily interact with the platform. Notably, messages submitted through the contact form are directly forwarded to the administrators via Elastic Mail, ensuring efficient communication.`,
        techStack: ["HTML5", " CSS3", " Javascript", " git"],
        sourceCode: `https://github.com/BiswajitNathaSharma/fiziksChamber`,
        liveDeployment: `https://biswajitnathasharma.github.io/fiziksChamber/`,
        ImgSrc: `./images/fiziksChamber.png`
    },
    {
        projectName: "Fiziks Chamber",
        description: `Fiziks Chamber is an innovative frontend project designed to promote a local physics coaching center. Highlighting an engaging 'Hall of Frame' page, it captivates users with its attractive design. With seamless device responsiveness and robust contact form validation, users can easily interact with the platform. Notably, messages submitted through the contact form are directly forwarded to the administrators via Elastic Mail, ensuring efficient communication.`,
        techStack: ["HTML5", " CSS3", " Javascript", " git"],
        sourceCode: `https://github.com/BiswajitNathaSharma/fiziksChamber`,
        liveDeployment: `https://biswajitnathasharma.github.io/fiziksChamber/`,
        ImgSrc: `./images/fiziksChamber.png`
    },
    {
        projectName: "Fiziks Chamber",
        description: `Fiziks Chamber is an innovative frontend project designed to promote a local physics coaching center. Highlighting an engaging 'Hall of Frame' page, it captivates users with its attractive design. With seamless device responsiveness and robust contact form validation, users can easily interact with the platform. Notably, messages submitted through the contact form are directly forwarded to the administrators via Elastic Mail, ensuring efficient communication.`,
        techStack: ["HTML5", " CSS3", " Javascript", " git"],
        sourceCode: `https://github.com/BiswajitNathaSharma/fiziksChamber`,
        liveDeployment: `https://biswajitnathasharma.github.io/fiziksChamber/`,
        ImgSrc: `./images/fiziksChamber.png`
    }
]
const miniProjects = [
    {
        projectName: "Todo app",
        description: `A streamlined todo list application, enabling users to efficiently manage their daily tasks. Utilizing local storage, the app ensures continuity by preserving tasks even after webpage refresh. Users can seamlessly add, update, and delete todos, enhancing productivity and organization. With its intuitive interface, staying on top of tasks has never been easier. Experience hassle-free task management with our simple yet effective todo list app.`,
        techStack: ["React", " JavaScript", " Tailwind", " inspirobot API"],
        sourceCode: `https://github.com/BiswajitNathaSharma/your-own-todo`,
        liveDeployment: `https://biswajitnathasharma.github.io/your-own-todo/`,
        ImgSrc: `./images/todo.png`
    },
    {
        projectName: "Git Profile Viewer",
        description: `"GitHub Profile Viewer" is a simple frontend project aimed at learning how to use the GitHub API with the fetch method. Users can input a GitHub username, and the application will fetch and display the user's profile information on a card. The project features both dark mode and light mode themes for user customization. This project serves as a beginner-friendly introduction to API handling and basic frontend development.`,
        techStack: ["React", " JavaScript", " Tailwind", " Context API"],
        sourceCode: ``,
        liveDeployment: ``,
        ImgSrc: `./images/github-profile-viewer.png`
    },
    {
        projectName: `Currency Converter`,
        description: `
        The "Currency Converter" project offers a user-friendly interface for seamless currency conversion. Users input amounts and select currencies effortlessly. Real-time exchange rates from an API ensure accurate calculations. Streamlining the process, it's ideal for travelers, online shoppers, and anyone needing swift, reliable currency conversion services.`,
        techStack: [" React", " JavaScript", " Tailwind"],
        sourceCode: ``,
        liveDeployment: ``,
        ImgSrc: `./images/currencyConverter.png`
    },
    {
        projectName: `Make me Laugh`,
        description: "Application built with React, which uses the 'icanhazdadjoke' api for generating jokes.",
        techStack: [" React", " JavaScript", " Tailwind"],
        sourceCode: ``,
        liveDeployment: ``,
        ImgSrc: `./images/joakGenerator.png`
    }
]
let isMobile = window.matchMedia("(max-width: 768px)").matches;


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


