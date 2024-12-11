let menubar = document.querySelector('#menu-bars');
let navbar  = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}


// JavaScript code
// let menubar = document.querySelector('#menu-bars');
// let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar a');

// Toggle menu on click
menubar.onclick = () => {
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Smooth scrolling for all nav links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor click behavior
        let targetId = link.getAttribute('href').substring(1); // Get the target section ID
        let targetSection = document.getElementById(targetId); // Find the target section
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scroll to the section
        }

        // Close the navbar after clicking (for smaller screens)
        menubar.classList.remove('fa-times');
        navbar.classList.remove('active');
    });
});


// Redirect to the appointment page when clicking the Make Appointment button
document.getElementById('appointment-btn').onclick = () => {
    window.location.href = 'appointment.html'; // Replace with your actual path
};

// Redirect to the View Appointment page
document.getElementById('view-appointment-btn').onclick = () => {
    window.location.href = 'view_appointment.html'; // Replace with the actual path
};
