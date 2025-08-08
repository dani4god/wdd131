/**
 * About Page JavaScript for Docchy Laboratories
 * Handles animations, interactions, and dynamic content
 */

class AboutPageController {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupEventListeners();
                this.initializeAnimations();
                this.setupIntersectionObserver();
                this.initCounterAnimations();
                this.setupParallaxEffects();
            });
        } else {
            this.setupEventListeners();
            this.initializeAnimations();
            this.setupIntersectionObserver();
            this.initCounterAnimations();
            this.setupParallaxEffects();
        }
    }

    setupEventListeners() {
        // Navigation toggle for mobile
        const navToggle = document.querySelector('.nav-toggle');
        const navList = document.querySelector('.nav-list');

        if (navToggle && navList) {
            navToggle.addEventListener('click', () => {
                navList.classList.toggle('active');
                navToggle.classList.toggle('active');
            });

            // Close menu when clicking on a link
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navList.classList.remove('active');
                    navToggle.classList.remove('active');
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
                    navList.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
        }

        // Smooth scrolling for anchor links
        this.setupSmoothScrolling();

        // Team member card interactions
        this.setupTeamCardInteractions();

        // Facility card interactions
        this.setupFacilityCardInteractions();

        // Add loading states for images
        this.setupImageLoadingStates();
    }

    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    initializeAnimations() {
        // Add initial animation classes
        const fadeElements = document.querySelectorAll('.fade-in');
        const slideElements = document.querySelectorAll('.slide-in-right');
        
        fadeElements.forEach(element => {
            element.style.animationDelay = '0.5s';
        });

        slideElements.forEach(element => {
            element.style.animationDelay = '0.8s';
        });
    }

    setupIntersectionObserver() {
        // Create intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    // Add staggered animation for grid items
                    if (entry.target.classList.contains('values-grid') || 
                        entry.target.classList.contains('team-grid') || 
                        entry.target.classList.contains('facilities-grid')) {
                        this.staggerChildAnimations(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe elements for animations
        const animatedElements = document.querySelectorAll(
            '[data-aos], .value-card, .team-member, .facility-card, .cert-item, .stat-item'
        );
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });

        // Observe sections for scroll-triggered animations
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            observer.observe(section);
        });
    }

    staggerChildAnimations(parent) {
        const children = parent.children;
        Array.from(children).forEach((child, index) => {
            setTimeout(() => {
                child.classList.add('animate-in');
            }, index * 150);
        });
    }

    initCounterAnimations() {
        const counterElements = document.querySelectorAll('.stat-item');
        
        const countObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    this.animateCounter(entry.target);
                    entry.target.classList.add('counted');
                }
            });
        }, { threshold: 0.5 });

        counterElements.forEach(element => {
            countObserver.observe(element);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.counter);
        const numberElement = element.querySelector('.stat-number');
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

    setupParallaxEffects() {
        // Subtle parallax effect for hero image
        const heroImage = document.querySelector('.hero-image img');
        
        if (heroImage) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                
                if (scrolled <= window.innerHeight) {
                    heroImage.style.transform = `translateY(${rate}px)`;
                }
            });
        }

        // Parallax for story image
        const storyImage = document.querySelector('.story-img');
        
        if (storyImage) {
            window.addEventListener('scroll', () => {
                const rect = storyImage.getBoundingClientRect();
                const speed = 0.3;
                
                if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
                    const yPos = -(rect.top * speed);
                    storyImage.style.transform = `translateY(${yPos}px)`;
                }
            });
        }
    }

    setupTeamCardInteractions() {
        const teamMembers = document.querySelectorAll('.team-member');
        
        teamMembers.forEach(member => {
            member.addEventListener('mouseenter', (e) => {
                const memberInfo = member.querySelector('.member-info');
                memberInfo.style.transform = 'translateY(-5px)';
            });
            
            member.addEventListener('mouseleave', (e) => {
                const memberInfo = member.querySelector('.member-info');
                memberInfo.style.transform = 'translateY(0)';
            });

            // Add click handler for mobile interactions
            member.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    member.classList.toggle('active');
                }
            });
        });
    }

    setupFacilityCardInteractions() {
        const facilityCards = document.querySelectorAll('.facility-card');
        
        facilityCards.forEach(card => {
            const features = card.querySelector('.facility-features');
            
            if (features) {
                card.addEventListener('mouseenter', () => {
                    const items = features.querySelectorAll('li');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.transform = 'translateX(5px)';
                            item.style.color = 'var(--accent-cyan)';
                        }, index * 100);
                    });
                });
                
                card.addEventListener('mouseleave', () => {
                    const items = features.querySelectorAll('li');
                    items.forEach(item => {
                        item.style.transform = 'translateX(0)';
                        item.style.color = 'var(--neutral-gray)';
                    });
                });
            }
        });
    }

    setupImageLoadingStates() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            // Add loading class
            img.classList.add('loading');
            
            // Create placeholder while loading
            const placeholder = document.createElement('div');
            placeholder.classList.add('image-placeholder');
            placeholder.style.cssText = `
                background: linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%);
                background-size: 200% 100%;
                animation: shimmer 1.5s infinite;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            `;
            
            // Add shimmer animation
            if (!document.querySelector('#shimmer-styles')) {
                const shimmerStyles = document.createElement('style');
                shimmerStyles.id = 'shimmer-styles';
                shimmerStyles.textContent = `
                    @keyframes shimmer {
                        0% { background-position: -200% 0; }
                        100% { background-position: 200% 0; }
                    }
                    img.loading {
                        opacity: 0;
                        transition: opacity 0.3s ease;
                    }
                    img.loaded {
                        opacity: 1;
                    }
                `;
                document.head.appendChild(shimmerStyles);
            }
            
            img.addEventListener('load', () => {
                img.classList.remove('loading');
                img.classList.add('loaded');
                const placeholder = img.parentNode.querySelector('.image-placeholder');
                if (placeholder) {
                    placeholder.remove();
                }
            });
            
            img.addEventListener('error', () => {
                img.classList.remove('loading');
                img.style.display = 'none';
                // Could add error placeholder here
            });
            
            // Insert placeholder if image hasn't loaded
            if (!img.complete) {
                const parent = img.parentNode;
                if (parent.style.position !== 'absolute' && parent.style.position !== 'relative') {
                    parent.style.position = 'relative';
                }
                parent.appendChild(placeholder);
            }
        });
    }

    // Utility method to check if an element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Method to handle window resize
    handleResize() {
        // Recalculate positions if needed
        const heroImage = document.querySelector('.hero-image img');
        if (heroImage) {
            heroImage.style.transform = 'translateY(0)';
        }
        
        // Reset parallax effects on mobile
        if (window.innerWidth <= 768) {
            const parallaxElements = document.querySelectorAll('.story-img');
            parallaxElements.forEach(element => {
                element.style.transform = 'translateY(0)';
            });
        }
    }

    // Accessibility enhancements
    setupAccessibility() {
        // Add keyboard navigation for interactive elements
        const interactiveCards = document.querySelectorAll('.team-member, .facility-card, .value-card');
        
        interactiveCards.forEach(card => {
            card.setAttribute('tabindex', '0');
            
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });
        });

        // Add focus indicators for better accessibility
        const focusStyles = document.createElement('style');
        focusStyles.textContent = `
            .team-member:focus,
            .facility-card:focus,
            .value-card:focus {
                outline: 3px solid var(--accent-cyan);
                outline-offset: 2px;
            }
        `;
        document.head.appendChild(focusStyles);
    }
}

// Initialize the About Page Controller
const aboutPageController = new AboutPageController();

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        aboutPageController.handleResize();
    }, 250);
});

// Setup accessibility features
document.addEventListener('DOMContentLoaded', () => {
    aboutPageController.setupAccessibility();
});

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AboutPageController;
}
