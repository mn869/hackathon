let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });

            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) { // Null check to avoid errors
                activeLink.classList.add('active');
            }
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Select the "Hire Me" button
let hireMeButton = document.querySelector('.btn');

// Add a click event listener to the button
hireMeButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default behavior (e.g., navigation)

    // Add an 'active' class to the button
    hireMeButton.classList.add('active');

    // Optionally, scroll to the contact section
    let contactSection = document.querySelector('#Contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });

    // Remove the 'active' class after some time (optional)
    setTimeout(() => {
        hireMeButton.classList.remove('active');
    }, 2000); // Remove after 2 seconds
});

// Select the "Read More" button
let readMoreButton = document.querySelector('.about .btn');

// Add a click event listener to the button
readMoreButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default behavior (e.g., navigation)

    // Add an 'active' class to the button
    readMoreButton.classList.add('active');

    // Optionally, scroll to the "About" section
    let aboutSection = document.querySelector('#About');
    aboutSection.scrollIntoView({ behavior: 'smooth' });

    // Remove the 'active' class after some time (optional)
    setTimeout(() => {
        readMoreButton.classList.remove('active');
    }, 2000); // Remove after 2 seconds
});

// Select the "Send Message" button
let sendMessageButton = document.querySelector('.contact .btn');

// Add a click event listener to the button
sendMessageButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting

    // Add an 'active' class to the button
    sendMessageButton.classList.add('active');

    // Validate the form fields (optional)
    let name = document.querySelector('.contact input[placeholder="Full Name"]').value;
    let email = document.querySelector('.contact input[placeholder="Email"]').value;
    let message = document.querySelector('.contact textarea').value;

    if (name && email && message) {
        // Display a success message
        alert('Message sent successfully!');
    } else {
        // Display an error message
        alert('Please fill out all fields.');
    }

    // Remove the 'active' class after some time (optional)
    setTimeout(() => {
        sendMessageButton.classList.remove('active');
    }, 2000); // Remove after 2 seconds
});