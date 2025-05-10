// Mobile Navigation
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

if (burger) {
    burger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('active');
        
        // Burger Animation
        burger.classList.toggle('toggle');
        
        // Animate Links
        navLinksItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
} else {
    console.error('Burger element not found!');
}

// Testimonial Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(n) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    currentTestimonial = (n + totalTestimonials) % totalTestimonials;
    testimonials[currentTestimonial].classList.add('active');
}

// Auto testimonial change every 5 seconds
setInterval(() => {
    showTestimonial(currentTestimonial + 1);
}, 5000);

// Form Validation
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    
    // Name validation
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else if (nameInput.value.trim().length < 2) {
        nameError.textContent = 'Name must be at least 2 characters';
        isValid = false;
    } else {
        nameError.textContent = '';
    }
    
    // Email validation
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email';
        isValid = false;
    } else {
        emailError.textContent = '';
    }
    
    // Phone validation
    if (phoneInput.value.trim() === '') {
        phoneError.textContent = 'Phone number is required';
        isValid = false;
    } else if (!isValidPhone(phoneInput.value.trim())) {
        phoneError.textContent = 'Please enter a valid phone number';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }
    
    // Message validation
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Message is required';
        isValid = false;
    } else if (messageInput.value.trim().length < 10) {
        messageError.textContent = 'Message must be at least 10 characters';
        isValid = false;
    } else {
        messageError.textContent = '';
    }
    
    if (isValid) {
        // In a real application, you would send the form data to a server here
        successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        successMessage.style.display = 'block';
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }
});

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhone(phone) {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);
}

// Close mobile menu when clicking on a link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// Make phone numbers clickable on mobile
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function(e) {
        if (window.innerWidth > 768) {
            e.preventDefault();
        }
    });
});

const element = document.querySelector('.your-selector');
console.log(element); // Check if it's null
if (element) {
    element.addEventListener('click', () => {
        console.log('Element clicked!');
    });
}

const myElement = document.querySelector('#myElement');  // Replace with your actual selector
if (myElement) {
    myElement.addEventListener('click', () => {
        console.log('Element clicked!');
    });
} else {
    console.error('Element not found');
}

// Hero Slide Activation
const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function showSlide(index) {
    // Remove the 'active' class from all slides
    heroSlides.forEach(slide => slide.classList.remove('active'));

    // Add the 'active' class to the current slide
    heroSlides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % heroSlides.length; // Loop back to the first slide
    showSlide(currentSlide);
}

// Automatically change slides every 5 seconds
setInterval(nextSlide, 5000);

// Tooltip Activation
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        const tooltip = icon.querySelector('.tooltip');
        if (tooltip) {
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateY(0)';
        }
    });

    icon.addEventListener('mouseleave', () => {
        const tooltip = icon.querySelector('.tooltip');
        if (tooltip) {
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateY(10px)';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Burger Menu
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burger.classList.toggle('toggle');

            navLinksItems.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });
    }

    // Typing Effect
    const textElement = document.getElementById('typing-text');
    if (textElement) {
        const text = "YOUR DREAM CAR AWAITS";
        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                textElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        }

        typeWriter();
    }

    // Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
    }

    // Smooth Scroll for Anchor Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Theme toggle
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
        const body = document.body;
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.classList.add(savedTheme);
        }

        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            if (body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark-theme');
            } else {
                localStorage.removeItem('theme');
            }
        });
    }
});

// Smooth Scroll for Anchor Links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');    
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
}   else {
    console.error('Back to Top button not found');
}   
// Initialize the first testimonial
showTestimonial(currentTestimonial);    
// Initialize the first slide
showSlide(currentSlide);    
// Initialize the first testimonial
showTestimonial(currentTestimonial);
// Initialize the first slide
showSlide(currentSlide);
// Initialize the first testimonial
showTestimonial(currentTestimonial);    
// Initialize the first slide
showSlide(currentSlide);    
// Initialize the first testimonial
showTestimonial(currentTestimonial);
// Initialize the first slide   
showSlide(currentSlide);
// Initialize the first testimonial 
showTestimonial(currentTestimonial);
// Initialize the first slide
showSlide(currentSlide);