const projectsData = [
    {
        title: "Social media clone",
        description: "Single-page app created with a React frontend, Node and Express backend, and Mongo database. Project utilizes Redux Toolkit for state-management, React Router for conditional rendering, MaterialUI for design, and is equipped with Bcrypt and middleware for user-authorization.",
        image: "./static/images/vargasbook.jpeg",
        link: "https://github.com/Ehwick/media-clone"
    },
    {
        title: "Computer vision apps",
        description: "3 python apps created by utilizing OpenCV and Tkinter libraries. In the Drawing setting of the app, Mediapipe is used to allow the user to draw on the webcam using their own index finger as a stylus, with clear canvas capabilities. In the Text Recognition setting, Tesseract is used to recognize any printed words displayed on the webcam.",
        image: "./static/images/cvpython.jpeg",
        link: "https://github.com/Ehwick/computervisionapps"
    },
    // Add more projects as needed
];

// Function to create a project card
function createProjectCard(project) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.style.marginRight = "30px";

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.title;
    projectTitle.style.color = "black";
    
    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;
    projectDescription.style.color = "black";

    const projectImage = document.createElement("img");
    projectImage.src = project.image;
    projectImage.alt = project.title;
    projectImage.style.width = "90%";
    projectImage.style.border = "2px solid black";
    projectImage.style.borderRadius = "25px";
    projectImage.style.height = "auto";

    const projectLink = document.createElement("a");
    projectLink.href = project.link;
    projectLink.target = "_blank";
    projectLink.appendChild(projectImage);

    projectCard.appendChild(projectTitle);
    projectCard.appendChild(projectLink);
    projectCard.appendChild(projectDescription);

    return projectCard;
}

// Function to display projects in the "projects" section
function displayProjects() {
    const projectsSection = document.getElementById("project-section");

    projectsData.forEach((project) => {
        const projectCard = createProjectCard(project);
        projectsSection.appendChild(projectCard);
    });
}

// Call the function to display projects when the page loads
window.addEventListener("load", displayProjects);

function toggleMenu() {
    const menu = document.querySelector('#hamburger-links');
    const icon = document.querySelector('#hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

const hamcon = document.getElementById("hamburger-icon");
hamcon.addEventListener("click", toggleMenu);

function sendEmail() 
{
    window.location = "mailto:vargaserik1@gmail.com";
}

const email = document.getElementById("email");
email.addEventListener("click", sendEmail);