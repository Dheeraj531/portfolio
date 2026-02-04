// ========================================
// Navigation Toggle
// ========================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ========================================
// Typing Effect
// ========================================
const typingText = document.querySelector('.typing-text');
const roles = [
    'Cloud Computing Enthusiast',
    'AI & ML Developer',
    'Data Science Student',
    'Full Stack Developer',
    'Problem Solver'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before typing new word
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 1000);
});

// ========================================
// Navbar Background on Scroll
// ========================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 15, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ========================================
// Smooth Scrolling for Navigation Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Skill Bar Animation
// ========================================
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible && bar.style.width === '0px' || isVisible && bar.style.width === '') {
            bar.style.width = progress + '%';
        }
    });
}

// ========================================
// Fade In Animation on Scroll
// ========================================
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.skill-category, .timeline-item, .project-card, .contact-item');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
            element.classList.add('fade-in', 'visible');
        }
    });
}

// Add initial fade-in class
document.querySelectorAll('.skill-category, .timeline-item, .project-card, .contact-item').forEach(el => {
    el.classList.add('fade-in');
});

// ========================================
// Scroll Event Listeners
// ========================================
window.addEventListener('scroll', () => {
    animateSkillBars();
    handleScrollAnimations();
});

// Initial check on page load
document.addEventListener('DOMContentLoaded', () => {
    animateSkillBars();
    handleScrollAnimations();
});

// ========================================
// Contact Form Handler
// ========================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;
    
    const formData = {
        access_key: '0de61839-83a6-4db4-a5d2-5f52dd81f7b5',
        to_email: 'ballappallidheeraj17@gmail.com',
        from_name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: `Portfolio Contact: ${document.getElementById('subject').value}`,
        message: `Name: ${document.getElementById('name').value}\nEmail: ${document.getElementById('email').value}\n\nMessage:\n${document.getElementById('message').value}`
    };
    
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (result.success) {
            alert('Thank you! Your message has been sent successfully to Dheeraj.');
            contactForm.reset();
        } else {
            throw new Error('Failed to send');
        }
    } catch (error) {
        alert('Failed to send message. Please email directly at ballappallidheeraj17@gmail.com');
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
});

// ========================================
// Active Navigation Link on Scroll
// ========================================
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.style.color = '';
            });
            if (navLink) {
                navLink.style.color = '#6c63ff';
            }
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ========================================
// Parallax Effect for Hero Section
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled * 0.002);
    }
});

// ========================================
// Intersection Observer for Animations
// ========================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ========================================
// Console Easter Egg
// ========================================
console.log('%c Welcome to Dheeraj\'s Portfolio! 🚀', 'color: #6c63ff; font-size: 20px; font-weight: bold;');
console.log('%c Feel free to connect with me on LinkedIn!', 'color: #4ecdc4; font-size: 14px;');
