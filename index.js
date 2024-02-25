window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    if (window.pageYOffset > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector(".moving-image").classList.add("move");
    document.querySelector(".main-left").classList.add("move-left");
    skillLoader()
});

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
        techStack: ["HTML5","CSS3","Javascript","git"],
        sourceCode: `https://github.com/BiswajitNathaSharma/fiziksChamber`,
        liveDeployment: `https://biswajitnathasharma.github.io/fiziksChamber/`
    }
]
const miniProjects = [
    {
        projectName: "Todo app",
        description:  `A streamlined todo list application, enabling users to efficiently manage their daily tasks. Utilizing local storage, the app ensures continuity by preserving tasks even after webpage refresh. Users can seamlessly add, update, and delete todos, enhancing productivity and organization. With its intuitive interface, staying on top of tasks has never been easier. Experience hassle-free task management with our simple yet effective todo list app.` ,
        techStack : ["React","JavaScript","inspirobot API"],
        sourceCode: `https://github.com/BiswajitNathaSharma/your-own-todo`,
        liveDeployment:`https://biswajitnathasharma.github.io/your-own-todo/`
    }
]
function skillLoader() {
    const skill_container = document.getElementById("skill-container");
    mySkills.forEach(object => {
        // Create a new card for each object
        const card = document.createElement("div");
        card.classList.add("indivisual-skills");

        // Create a new div to hold both the skillImg and descriptionElement
        const skill = document.createElement("div");
        skill.classList.add("skill");

        // Populate the card with object data
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



