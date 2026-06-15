function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const icon = document.querySelector('.menu-button i');

    sidebar.classList.toggle('active');

    if(sidebar.classList.contains('active')) {
        icon.classList.remove('fa-solid fa-arrow-left');
        icon.classList.add('fa-solid fa-bars');
    } else {
        icon.classList.remove('fa-solid fa-bars');
            icon.classList.add('fa-solid fa-arrow-left');
    }
}
function showPopup() {
    setTimeout(function() {
        document.getElementById("success-popup").style.display = "flex";
        document.getElementById("contact-form").reset();
    }, 500);
}

function closePopup(){
    document.getElementById("success-popup").style.display = "none";
}
ScrollReveal().reveal('.welcome-text',{
    distance: '60px',
    duration: 1500,
    origin: 'left',
    opacity: 0,
    delay: 200,
    reserve: true
});
ScrollReveal().reveal('.about-image',{
    distance: '60px',
    duration: 1500,
    origin: 'left',
    opacity: 0,
    delay: 200,
    reserve: true
});
ScrollReveal().reveal('.about-content',{
    distance:'60px',
    duration: 1500,
    origin:'right',
    delay: 300,
    reserve: true
});
ScrollReveal().reveal('.project-card',{
    distance:'50px',
    duration:1200,
    origin:'bottom',
    interval:200,
    reset: true
});
ScrollReveal().reveal('.contact-form-area',{
    distance:'60px',
    duration:1400,
    origin:'left',
    reset: true
});
ScrollReveal().reveal('.contact-profile',{
    distance:'60px',
    duration:1400,
    origin:'right',
    reset: true
});

console.log("Script loaded successfully.");