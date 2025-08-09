// Main JavaScript - main.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileNavigation();
    initScrollEffects();
    initAnimationObserver();
    initSmoothScrolling();
    initFormValidation();
    initAccessibility();
    initPerformanceOptimizations();
    initCounterAnimations();
    initializeHamburgerMenu();
});

// Mobile Navigation Toggle
function initMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!navToggle || !navList) return;
    
    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navToggle.classList.toggle('active');
        navList.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navList.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navList.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
            navToggle.classList.remove('active');
            navList.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
    
    // Handle escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navList.classList.contains('active')) {
            navToggle.classList.remove('active');
            navList.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            navToggle.focus();
        }
    });
}

// Scroll Effects
function initScrollEffects() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    let lastScrollTop = 0;
    let scrollTimer = null;
    
    window.addEventListener('scroll', function() {
        // Throttle scroll events
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        
        scrollTimer = setTimeout(function() {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add/remove scrolled class for styling
            if (currentScrollTop > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Hide/show header on scroll (optional enhancement)
            if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        }, 10);
    }, { passive: true });
}

// Intersection Observer for Animations
function initAnimationObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Optional: Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll([
        '.service-card',
        '.research-card',
        '.info-card',
        '.section-header',
        '.hero-content'
    ].join(','));
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without jumping
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
}

// Form Validation (for future contact forms)
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                // Remove previous error styling
                input.classList.remove('error');
                
                // Basic validation
                if (!input.value.trim()) {
                    input.classList.add('error');
                    isValid = false;
                }
                
                // Email validation
                if (input.type === 'email' && input.value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(input.value)) {
                        input.classList.add('error');
                        isValid = false;
                    }
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                // Focus first error field
                const firstError = form.querySelector('.error');
                if (firstError) {
                    firstError.focus();
                }
            }
        });
        
        // Real-time validation feedback
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.classList.add('error');
                } else {
                    this.classList.remove('error');
                }
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error') && this.value.trim()) {
                    this.classList.remove('error');
                }
            });
        });
    });
}

// Accessibility Enhancements
function initAccessibility() {
    // Add skip link functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-blue);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 0 0 4px 4px;
        z-index: 9999;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '0';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content ID if not present
    const main = document.querySelector('main');
    if (main && !main.id) {
        main.id = 'main-content';
    }
    
    // Improve button accessibility
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
        if (!button.textContent.trim() && !button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', 'Button');
        }
    });
    
    // Add ARIA labels to interactive elements
    const cards = document.querySelectorAll('.service-card, .research-card');
    cards.forEach((card, index) => {
        const title = card.querySelector('h3');
        if (title) {
            card.setAttribute('aria-labelledby', `card-title-${index}`);
            title.id = `card-title-${index}`;
        }
    });
}

// Performance Optimizations
function initPerformanceOptimizations() {
    // Lazy load images when they come into view
    const images = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Preload critical resources
    const preloadLinks = [
        { href: 'css/styles.css', as: 'style' },
        { href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Inter:wght@300;400;500;600&display=swap', as: 'style' }
    ];
    
    preloadLinks.forEach(link => {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.href = link.href;
        preloadLink.as = link.as;
        document.head.appendChild(preloadLink);
    });
    
    // Reduce unnecessary repaints
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Handle resize-specific logic here
            const navList = document.querySelector('.nav-list');
            const navToggle = document.querySelector('.nav-toggle');
            
            if (window.innerWidth > 768) {
                navList.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        }, 250);
    });
}

// Utility Functions
const utils = {
    // Debounce function for performance
    debounce: function(func, wait, immediate) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },
    
    // Throttle function for scroll events
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', {
        message: e.message,
        source: e.filename,
        line: e.lineno,
        column: e.colno,
        error: e.error
    });
    
    // Optional: Send error to analytics service
    // analytics.track('JavaScript Error', { ... });
});




// main.js (partial - counter animation section)
function initCounterAnimations() {
    const counterElements = document.querySelectorAll('.stat-item');
    
    if (!counterElements.length) {
        console.warn('No .stat-item elements found for counter animations.');
        return;
    }

    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                console.log(`Animating counter for element with data-counter=${entry.target.dataset.counter}`);
                animateCounter(entry.target); // Call standalone function
                entry.target.classList.add('counted');
                countObserver.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, { 
        threshold: 0.2, // Trigger when 20% visible
        rootMargin: '0px' // No offset
    });

    counterElements.forEach(element => {
        countObserver.observe(element);
    });

    // Fallback: Animate if already in view
    counterElements.forEach(element => {
        if (utils.isInViewport(element) && !element.classList.contains('counted')) {
            console.log(`Fallback: Animating counter for element with data-counter=${element.dataset.counter}`);
            animateCounter(element);
            element.classList.add('counted');
        }
    });
}

function animateCounter(element) {
    const target = parseInt(element.dataset.counter);
    const numberElement = element.querySelector('.stat-number');

    if (!numberElement) {
        console.error(`No .stat-number found in stat-item with data-counter=${target}`);
        return;
    }

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            numberElement.textContent = target + (target === 95 ? '%' : '');
            clearInterval(counter);
        } else {
            numberElement.textContent = Math.floor(current) + (target === 95 ? '%' : '');
        }
    }, duration / steps);
}
document.addEventListener('DOMContentLoaded', function() {
    // Set current year and last modified date
    setFooterDates();
    
    // Initialize hamburger menu functionality
    initializeHamburgerMenu();
    
    // Display all temples initially
    displayTemples(temples);
    
    // Initialize filter functionality
    initializeFilters();
});

/**
 * Set the current year and last modified date in the footer
 */
function setFooterDates() {
    // Set current year
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentyear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
   
    // Set last modified date
    const lastModified = new Date(document.lastModified);
    const lastModifiedElement = document.getElementById('lastmodified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = lastModified.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

/**
 * Initialize hamburger menu functionality
 */
function initializeHamburgerMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.querySelector('.nav-list');
   
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            // Toggle the menu visibility
            navList.classList.toggle('open');
           
            // Change hamburger icon to X and vice versa
            if (navList.classList.contains('open')) {
                menuToggle.innerHTML = '✕';
                menuToggle.setAttribute('aria-label', 'Close menu');
            } else {
                menuToggle.innerHTML = '☰';
                menuToggle.setAttribute('aria-label', 'Open menu');
            }
        });
       
        // Close menu when clicking on a nav link (mobile)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 768) {
                    navList.classList.remove('open');
                    menuToggle.innerHTML = '☰';
                    menuToggle.setAttribute('aria-label', 'Open menu');
                }
            });
        });
       
        // Close menu when window is resized to larger view
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768) {
                navList.classList.remove('open');
                menuToggle.innerHTML = '☰';
                menuToggle.setAttribute('aria-label', 'Open menu');
            }
        });
    }
}
