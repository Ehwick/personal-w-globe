const projectsData = [
    {
        title: "Social media clone",
        description: "Single-page app created with a React frontend, Node and Express backend, and Mongo database. Project utilizes Redux Toolkit for state-management, React Router for conditional rendering, MaterialUI for design, and is equipped with Bcrypt and middleware for user-authorization.",
        image: "public/vargasbook.jpeg",
        link: "project1.html"
    },
    {
        title: "Computer vision apps",
        description: "3 python apps created by utilizing OpenCV and Tkinter libraries. In the Drawing setting of the app, Mediapipe is used to allow the user to draw on the webcam using their own index finger as a stylus, with clear canvas capabilities. In the Text Recognition setting, Tesseract is used to recognize any printed words displayed on the webcam.",
        image: "public/cvpython.jpeg",
        link: "project2.html"
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

    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;

    const projectImage = document.createElement("img");
    projectImage.src = project.image;
    projectImage.alt = project.title;
    projectImage.style.width = "90%";
    projectImage.style.border = "2px solid black";
    projectImage.style.borderRadius = "25px";
    projectImage.style.height = "auto";

    const projectLink = document.createElement("a");
    projectLink.href = project.link;

    projectCard.appendChild(projectTitle);
    projectCard.appendChild(projectImage);
    projectCard.appendChild(projectDescription);
    projectCard.appendChild(projectLink);

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