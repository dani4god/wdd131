class ResearchApp {
    constructor() {
        this.publications = [
            {
                id: 1,
                category: 'environmental',
                tag: 'Water Quality',
                title: 'Assessing Microplastic Contamination in Urban Waterways',
                authors: 'Dr. Jane Smith, Dr. Robert Lee',
                date: 'March 2025',
                abstract: 'This study investigates the prevalence and sources of microplastic pollution in urban waterways, proposing innovative filtration methods for mitigation.',
                link: '#'
            },
            {
                id: 2,
                category: 'chemical',
                tag: 'Analytical Chemistry',
                title: 'Advancements in FTIR Spectroscopy for Polymer Analysis',
                authors: 'Dr. Emily Chen, Prof. Michael Brown',
                date: 'January 2025',
                abstract: 'We present new techniques in Fourier Transform Infrared spectroscopy to enhance the identification of polymer compositions.',
                link: '#'
            },
            {
                id: 3,
                category: 'biological',
                tag: 'Phytochemistry',
                title: 'Bioactive Compounds in Native Plant Species',
                authors: 'Dr. Sarah Johnson, Dr. David Kim',
                date: 'December 2024',
                abstract: 'This paper explores the potential pharmaceutical applications of secondary metabolites found in native plant species.',
                link: '#'
            },
            {
                id: 4,
                category: 'environmental',
                tag: 'Soil Health',
                title: 'Impact of Organic Farming on Soil Microbial Diversity',
                authors: 'Prof. Alan Green, Dr. Lisa Wong',
                date: 'October 2024',
                abstract: 'Our research evaluates how organic farming practices enhance soil microbial diversity and long-term fertility.',
                link: '#'
            },
            {
                id: 5,
                category: 'chemical',
                tag: 'Nanotechnology',
                title: 'Nanoparticle Characterization for Drug Delivery Systems',
                authors: 'Dr. Mark Taylor, Dr. Anna Patel',
                date: 'September 2024',
                abstract: 'This study optimizes nanoparticle size and surface properties for improved drug delivery efficiency.',
                link: '#'
            },
            {
                id: 6,
                category: 'biological',
                tag: 'Toxicology',
                title: 'Toxicity Assessment of Heavy Metals in Aquatic Organisms',
                authors: 'Dr. Rachel Adams, Prof. James Carter',
                date: 'August 2024',
                abstract: 'We assess the toxicological effects of heavy metal exposure on aquatic ecosystems, focusing on bioaccumulation.',
                link: '#'
            }
        ];

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupIntersectionObserver();
        this.renderPublications('all');
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

        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                this.renderPublications(filter);
            });
        });
    }

    renderPublications(filter) {
        const publicationsGrid = document.querySelector('.publications-grid');
        if (!publicationsGrid) return;

        const filteredPublications = filter === 'all'
            ? this.publications
            : this.publications.filter(pub => pub.category === filter);

        publicationsGrid.innerHTML = filteredPublications.map(pub => `
            <article class="publication-card" data-category="${pub.category}">
                <span class="publication-tag">${pub.tag}</span>
                <h3 class="publication-title">${pub.title}</h3>
                <p class="publication-authors">${pub.authors}</p>
                <p class="publication-date">${pub.date}</p>
                <p class="publication-abstract">${pub.abstract}</p>
                <a href="${pub.link}" class="publication-link">Read Full Paper</a>
            </article>
        `).join('');

        // Animate cards on render
        const cards = publicationsGrid.querySelectorAll('.publication-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 100);
        });
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

        const elements = document.querySelectorAll('.hero-content, .section-header, .research-card, .collaboration-content');
        elements.forEach(el => observer.observe(el));
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new ResearchApp();
});
