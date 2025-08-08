class ContactApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupIntersectionObserver();
    }

    setupEventListeners() {
        // Mobile menu toggle
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (mobileToggle && navMenu) {
            mobileToggle.addEventListener('click', () => {
                mobileToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
                const isExpanded = navMenu.classList.contains('active');
                mobileToggle.setAttribute('aria-expanded', isExpanded);
            });

            // Close mobile menu when clicking on nav links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                });
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.nav-container')) {
                    mobileToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                }
            });
        }

        // Smooth scrolling for anchor links
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Contact form submission
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(contactForm);
            });
        }
    }

    handleFormSubmission(form) {
        const formData = new FormData(form);
        const formMessage = document.getElementById('form-message');
        let isValid = true;

        // Reset error states
        form.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
            const errorElement = group.querySelector('.error-message');
            if (errorElement) errorElement.textContent = '';
        });
        formMessage.textContent = '';

        // Validate fields
        const name = formData.get('name').trim();
        if (!name) {
            this.showError('name', 'Please enter your full name.');
            isValid = false;
        }

        const email = formData.get('email').trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            this.showError('email', 'Please enter your email address.');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            this.showError('email', 'Please enter a valid email address.');
            isValid = false;
        }

        const phone = formData.get('phone').trim();
        const phoneRegex = /^\+?\d{10,15}$/;
        if (phone && !phoneRegex.test(phone.replace(/\D/g, ''))) {
            this.showError('phone', 'Please enter a valid phone number.');
            isValid = false;
        }

        const inquiryType = formData.get('inquiry-type');
        if (!inquiryType) {
            this.showError('inquiry-type', 'Please select an inquiry type.');
            isValid = false;
        }

        const message = formData.get('message').trim();
        if (!message) {
            this.showError('message', 'Please enter your message.');
            isValid = false;
        }

        if (isValid) {
            // Simulate form submission (replace with actual API call in production)
            setTimeout(() => {
                formMessage.classList.add('success');
                formMessage.textContent = 'Thank you for your inquiry! We will respond within 24-48 hours.';
                form.reset();
            }, 1000);
        } else {
            formMessage.classList.add('error');
            formMessage.textContent = 'Please correct the errors above and try again.';
        }
    }

    showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const formGroup = field.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');
        formGroup.classList.add('error');
        errorElement.textContent = message;
    }

    setupIntersectionObserver() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.hero-content, .section-header, .contact-form, .info-item');
        elements.forEach(el => observer.observe(el));
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new ContactApp();
});
