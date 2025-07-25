// Array of temple objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Additional temple objects
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Paris France",
        location: "Le Chesnay, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    }
];

// Wait for DOM to be fully loaded
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

/**
 * Display temples in the gallery
 */
function displayTemples(templeArray) {
    const gallery = document.getElementById('temple-gallery');
    gallery.innerHTML = '';
    
    templeArray.forEach(temple => {
        const templeCard = document.createElement('div');
        templeCard.className = 'temple-card';
        
        templeCard.innerHTML = `
            <img src="${temple.imageUrl}" 
                 alt="${temple.templeName}" 
                 loading="lazy">
            <div class="temple-info">
                <h3 class="temple-name">${temple.templeName}</h3>
                <p class="temple-location">📍 ${temple.location}</p>
                <p class="temple-dedicated">🗓️ Dedicated: ${temple.dedicated}</p>
                <p class="temple-area">📏 Area: ${temple.area.toLocaleString()} sq ft</p>
            </div>
        `;
        
        gallery.appendChild(templeCard);
    });
}

/**
 * Initialize filter functionality
 */
function initializeFilters() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterTemples(filter);
        });
    });
}

/**
 * Filter temples based on criteria
 */
function filterTemples(filter) {
    let filteredTemples = [];
    
    switch(filter) {
        case 'old':
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year < 1900;
            });
            break;
        case 'new':
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year > 2000;
            });
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        case 'all':
        default:
            filteredTemples = temples;
            break;
    }
    
    displayTemples(filteredTemples);
}

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
   
    // Observe images as they are added to the DOM
    const observeImages = () => {
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    };
    
    // Initial observation
    setTimeout(observeImages, 100);
}
