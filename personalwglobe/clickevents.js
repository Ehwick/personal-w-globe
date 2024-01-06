function toggleMenu() {
    const menu = document.querySelector('#hamburger-links');
    const icon = document.querySelector('#hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
};

function sendEmail() 
{
    window.location = "mailto:vargaserik1@gmail.com";
};
