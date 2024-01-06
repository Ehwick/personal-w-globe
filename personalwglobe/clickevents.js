function toggleMenu() {
    const menu = document.querySelector('#hamburger-links');
    const icon = document.querySelector('#hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
};

const hamcon = document.getElementById('hamburger-icon');
hamcon.addEventListener('click', toggleMenu);
const hamlinks = document.querySelectorAll('#hamlink');
for (let i = 0; i < hamlinks.length; i++) {
    hamlinks[i].addEventListener('click', toggleMenu);
};

function sendEmail() 
{
    window.location = "mailto:vargaserik1@gmail.com";
};

const email = document.getElementById('email');
email.addEventListener('click', sendEmail);