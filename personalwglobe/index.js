function sendEmail() 
{
    window.location = "mailto:verik@sas.upenn.edu";
};

const email = document.getElementById('email');
email.addEventListener('click', sendEmail);