// Toggle Menu Navbar (untuk versi mobile)
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

// Menambahkan garis bawah kuning pada menu aktif
const navLinks = document.querySelectorAll('.navbar a');

// Menambahkan event listener pada setiap link navbar
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Menghapus class 'active' dari semua link
        navLinks.forEach(link => link.classList.remove('active'));
        // Menambahkan class 'active' pada link yang diklik
        link.classList.add('active');
    });
});

// Untuk mode gelap
let darkModeIcon = document.querySelector("#darkMode-icon");
let body = document.body;

// Cek jika mode gelap sudah diaktifkan sebelumnya
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeIcon.classList.replace("bx-moon", "bx-sun");
}

// Event klik untuk mengaktifkan / menonaktifkan mode gelap
darkModeIcon.onclick = () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        darkModeIcon.classList.replace("bx-moon", "bx-sun");
    } else {
        localStorage.setItem("dark-mode", "disabled");
        darkModeIcon.classList.replace("bx-sun", "bx-moon");
    }
};


// Tutup navbar jika diklik di luar
document.addEventListener("click", (event) => {
    if (!menuIcon.contains(event.target) && !navbar.contains(event.target)) {
        navbar.classList.remove("active");
        menuIcon.classList.remove("bx-x");
    }
});

// Filter Projects
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

// Function to filter projects based on selected category
function filterProjects(category) {
    projectItems.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Add event listeners to each filter button
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove the active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to the clicked button
        button.classList.add('active');

        // Filter the projects
        const filterCategory = button.getAttribute('data-filter');
        filterProjects(filterCategory);
    });
});

// Initially, show all projects
filterProjects('all');

let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const totalTestimonials = testimonials.length;
const testimonialSlide = document.querySelector('.testimonial-slide');
const dots = document.querySelectorAll('.dot');

// Function to change the testimonial
function changeTestimonial() {
    // Remove active class from all testimonials
    testimonials.forEach(item => item.classList.remove('active'));
    
    // Add active class to the current testimonial
    testimonials[currentIndex].classList.add('active');
    
    // Update dot navigation
    updateDotPosition();
}

// Function to update dot navigation
function updateDotPosition() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Event listeners for dots
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-index'));
        changeTestimonial();
    });
});

// Optional: Auto slide every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalTestimonials; // Loop back to first testimonial
    changeTestimonial();
}, 2000);

// Initialize the first testimonial
changeTestimonial();
