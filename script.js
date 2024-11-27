// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Certificates Data
const certificateItems = [
    {
        title: 'Cybersecurity Certification',
        description: 'Advanced certification in cybersecurity and system protection.',
        image: 'assets/cert1.jpg',
        tags: ['Security', 'Networking', 'Compliance']
    },
    {
        title: 'Web Development Certificate',
        description: 'Professional certification in modern web development.',
        image: 'assets/cert2.jpg',
        tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
        title: 'Music Production Certificate',
        description: 'Professional certification in digital music production.',
        image: 'assets/cert3.jpg',
        tags: ['Music', 'Production', 'Digital Audio']
    }
];

// Populate Certificates Section
const certificatesGrid = document.querySelector('.certificates-grid');
certificateItems.forEach(cert => {
    const certElement = document.createElement('div');
    certElement.className = 'certificate-item';
    certElement.innerHTML = `
        <div class="certificate-content">
            <img src="${cert.image}" alt="${cert.title}">
            <div class="certificate-info">
                <h3>${cert.title}</h3>
                <p>${cert.description}</p>
                <div class="tags">
                    ${cert.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    certificatesGrid.appendChild(certElement);
});

// Contact Form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Music Player (Basic Implementation)
const musicPlayer = document.querySelector('.music-player');
musicPlayer.innerHTML = `
    <div class="player-controls">
        <h3>Featured Track</h3>
        <p>AMI Band - Rhythm of Tomorrow</p>
        <audio controls>
            <source src="assets/featured-track.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>
`;

// Dynamic year in footer
document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} AUDSilva. All rights reserved.`;

// Add scroll-based navbar background
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 25, 47, 0.95)';
    } else {
        navbar.style.background = 'transparent';
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
