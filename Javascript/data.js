// array of skills
const mySkills = [
    {
        skillName: "HTML5",
        ImgSrc: "./images/skill-images/html.png",
        alt: "HTML Icon"
    },
    {
        skillName: "CSS",
        ImgSrc: "./images/skill-images/css.png",
        alt: "Cascading Style Sheets"
    },
    {
        skillName: "JavaScript",
        ImgSrc: "./images/skill-images/js.png",
        alt: "javascript icon"
    },
    {
        skillName: "React",
        ImgSrc: "./images/skill-images/react.png",
        alt: "React Logo"
    },
    {
        skillName: "Node JS",
        ImgSrc: "./images/skill-images/nodeJs.png",
        alt: "NodeJS Logo"
    },
    {
        skillName: "Tailwind",
        ImgSrc: "./images/skill-images/tailwind.png",
        alt: "tailwind Logo"
    },
    {
        skillName: "Git",
        ImgSrc: "./images/skill-images/git.png",
        alt: "Git Logo"
    },
    {
        skillName: "My SQL",
        ImgSrc: "./images/skill-images/mysql.png",
        alt: "mysql Logo"
    },
    {
        skillName: "Mongo DB",
        ImgSrc: "./images/skill-images/mongodb.png",
        alt: "mongo db Logo"
    },

]

// Array of projects 

const projects = [
    {
        projectName: "Fiziks Chamber",
        description: `Fiziks Chamber is an innovative frontend project designed to promote a local physics coaching center. Highlighting an engaging 'Hall of Frame' page, it captivates users with its attractive design. With seamless device responsiveness and robust contact form validation, users can easily interact with the platform. Notably, messages submitted through the contact form are directly forwarded to the administrators via Elastic Mail, ensuring efficient communication.`,
        techStack: ["HTML5", " CSS3", " Javascript", " git"],
        sourceCode: `https://github.com/BiswajitNathaSharma/fiziksChamber`,
        liveDeployment: `https://biswajitnathasharma.github.io/fiziksChamber/`,
        ImgSrc: `./images/project-images/fiziksChamber.png`
    },
    {
        projectName: "Todo app",
        description: `A streamlined todo list application, enabling users to efficiently manage their daily tasks. Utilizing local storage, the app ensures continuity by preserving tasks even after webpage refresh. Users can seamlessly add, update, and delete todos, enhancing productivity and organization. With its intuitive interface, staying on top of tasks has never been easier. Experience hassle-free task management with our simple yet effective todo list app.`,
        techStack: ["React", " JavaScript", " Tailwind", " inspirobot API"],
        sourceCode: `https://github.com/BiswajitNathaSharma/your-own-todo`,
        liveDeployment: `https://biswajitnathasharma.github.io/your-own-todo/`,
        ImgSrc: `./images/project-images/todo.png`
    },
    {
        projectName: "Git Profile Viewer",
        description: `"GitHub Profile Viewer" is a simple frontend project aimed at learning how to use the GitHub API with the fetch method. Users can input a GitHub username, and the application will fetch and display the user's profile information on a card. The project features both dark mode and light mode themes for user customization. This project serves as a beginner-friendly introduction to API handling and basic frontend development.`,
        techStack: ["React", " JavaScript", " Tailwind", " Context API"],
        sourceCode: ``,
        liveDeployment: ``,
        ImgSrc: `./images/project-images/github-profile-viewer.png`
    },
    {
        projectName: `Currency Converter`,
        description: `
        The "Currency Converter" project offers a user-friendly interface for seamless currency conversion. Users input amounts and select currencies effortlessly. Real-time exchange rates from an API ensure accurate calculations. Streamlining the process, it's ideal for travelers, online shoppers, and anyone needing swift, reliable currency conversion services.`,
        techStack: [" React", " JavaScript", " Tailwind"],
        sourceCode: ``,
        liveDeployment: ``,
        ImgSrc: `./images/project-images/currencyConverter.png`
    },
    {
        projectName: `Make me Laugh`,
        description: "Application built with React, which uses the 'icanhazdadjoke' api for generating jokes.",
        techStack: [" React", " JavaScript", " Tailwind"],
        sourceCode: ``,
        liveDeployment: ``,
        ImgSrc: `./images/project-images/joakGenerator.png`
    }
]
export { projects, mySkills };