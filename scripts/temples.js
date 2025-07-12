// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year and last modified date
    setFooterDates();
    
    // Initialize hamburger menu functionality
    initializeHamburgerMenu();
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

// Optional: Add smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Add smooth scrolling behavior here if needed
        // This is a placeholder for future functionality
    });
});

// Optional: Add lazy loading observer for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}
