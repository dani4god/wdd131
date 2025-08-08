// Services Page JavaScript
class ServicesApp {
    constructor() {
        this.serviceData = {
            'water-analysis': {
                title: 'Water Analysis',
                icon: '💧',
                description: 'Comprehensive water quality testing for drinking water, wastewater, surface water, and groundwater sources. Our advanced analytical methods ensure accurate detection of contaminants and compliance with regulatory standards.',
                features: [
                    'Physical parameters (pH, temperature, turbidity, conductivity)',
                    'Chemical analysis (heavy metals, nutrients, organic compounds)',
                    'Microbiological testing (bacteria, viruses, parasites)',
                    'Regulatory compliance testing (EPA, WHO standards)',
                    'Real-time monitoring and continuous assessment',
                    'Custom testing protocols for specific applications'
                ],
                applications: ['Municipal water systems', 'Industrial processes', 'Environmental monitoring', 'Research studies'],
                turnaround: '24-48 hours',
                certification: 'ISO 17025 accredited'
            },
            'fatty-acid': {
                title: 'Fatty Acid Profile Analysis',
                icon: '🔬',
                description: 'Complete fatty acid composition analysis using gas chromatography techniques for food products, pharmaceutical preparations, and research applications.',
                features: [
                    'Saturated and unsaturated fatty acid identification',
                    'Trans fat quantification',
                    'Omega-3 and Omega-6 analysis',
                    'Free fatty acid determination',
                    'Lipid oxidation assessment',
                    'Custom fatty acid method development'
                ],
                applications: ['Food industry', 'Pharmaceutical research', 'Nutritional studies', 'Quality control'],
                turnaround: '3-5 business days',
                certification: 'AOAC validated methods'
            },
            'heavy-metals': {
                title: 'Heavy Metal Analysis',
                icon: '⚗️',
                description: 'Precise detection and quantification of toxic heavy metals in environmental samples, food products, and industrial materials using ICP-MS and atomic absorption spectroscopy.',
                features: [
                    'Lead, mercury, cadmium, arsenic detection',
                    'Chromium speciation analysis',
                    'Multi-element screening panels',
                    'Ultra-trace level detection capabilities',
                    'Sample digestion and preparation services',
                    'Regulatory compliance reporting'
                ],
                applications: ['Environmental monitoring', 'Food safety', 'Industrial compliance', 'Public health'],
                turnaround: '2-4 business days',
                certification: 'EPA Method 200.8 certified'
            },
            'antioxidant': {
                title: 'Antioxidant Analysis',
                icon: '🛡️',
                description: 'Comprehensive antioxidant capacity assessment and individual antioxidant compound identification for food, pharmaceutical, and natural product applications.',
                features: [
                    'DPPH radical scavenging activity',
                    'ABTS antioxidant capacity testing',
                    'Total phenolic content determination',
                    'Individual antioxidant compound identification',
                    'Vitamin C and E quantification',
                    'Stability testing under various conditions'
                ],
                applications: ['Functional foods', 'Nutraceuticals', 'Natural products', 'Anti-aging research'],
                turnaround: '3-5 business days',
                certification: 'Validated spectrophotometric methods'
            },
            'soil-analysis': {
                title: 'Soil Analysis',
                icon: '🌱',
                description: 'Complete soil characterization including physical, chemical, and biological properties for agricultural, environmental, and construction applications.',
                features: [
                    'Soil fertility assessment (NPK, micronutrients)',
                    'pH and electrical conductivity testing',
                    'Organic matter content determination',
                    'Soil texture and structure analysis',
                    'Contamination screening',
                    'Microbial activity assessment'
                ],
                applications: ['Agriculture', 'Environmental remediation', 'Construction', 'Land management'],
                turnaround: '2-3 business days',
                certification: 'ASTM standard methods'
            },
            'toxicology': {
                title: 'Toxicology Testing',
                icon: '☣️',
                description: 'Comprehensive toxicological assessment and safety evaluation services for chemicals, pharmaceuticals, and consumer products.',
                features: [
                    'Acute and chronic toxicity testing',
                    'Genotoxicity and mutagenicity studies',
                    'Cytotoxicity assessment',
                    'Biomarker analysis',
                    'Risk assessment and safety evaluation',
                    'Regulatory compliance testing'
                ],
                applications: ['Pharmaceutical development', 'Chemical safety', 'Consumer products', 'Environmental health'],
                turnaround: '5-10 business days',
                certification: 'GLP compliant facility'
            },
            'proximate': {
                title: 'Proximate Analysis',
                icon: '📈',
                description: 'Determination of basic nutritional components including moisture, ash, protein, fat, and carbohydrate content for food and feed products.',
                features: [
                    'Moisture content determination',
                    'Ash content analysis',
                    'Crude protein quantification',
                    'Fat and oil content measurement',
                    'Carbohydrate calculation',
                    'Energy value estimation'
                ],
                applications: ['Food labeling', 'Quality control', 'Nutritional research', 'Feed analysis'],
                turnaround: '2-3 business days',
                certification: 'AOAC official methods'
            },
            'ftir': {
                title: 'FTIR Spectroscopy Analysis',
                icon: '📊',
                description: 'Fourier Transform Infrared spectroscopy for molecular structure identification, material characterization, and chemical analysis.',
                features: [
                    'Functional group identification',
                    'Material composition analysis',
                    'Purity assessment',
                    'Contamination detection',
                    'Polymer characterization',
                    'Spectral library matching'
                ],
                applications: ['Material science', 'Quality control', 'Forensic analysis', 'Research and development'],
                turnaround: '1-2 business days',
                certification: 'ASTM E1131 compliant'
            },
            'phytochemistry': {
                title: 'Phytochemistry Analysis',
                icon: '🌿',
                description: 'Analysis of plant secondary metabolites, bioactive compounds, and natural products for pharmaceutical and nutraceutical applications.',
                features: [
                    'Alkaloid extraction and quantification',
                    'Flavonoid and phenolic compound analysis',
                    'Essential oil composition',
                    'Saponin and glycoside determination',
                    'Bioactivity screening',
                    'Plant extract standardization'
                ],
                applications: ['Herbal medicine', 'Natural products', 'Pharmaceutical research', 'Food additives'],
                turnaround: '4-6 business days',
                certification: 'Pharmacopeial methods'
            },
            'pah': {
                title: 'PAH Analysis',
                icon: '🔥',
                description: 'Detection and quantification of polycyclic aromatic hydrocarbons in environmental samples, food products, and industrial materials.',
                features: [
                    '16 EPA priority PAHs analysis',
                    'Benzo[a]pyrene quantification',
                    'PAH metabolite detection',
                    'Source identification studies',
                    'Carcinogenic potency assessment',
                    'Environmental fate studies'
                ],
                applications: ['Environmental monitoring', 'Food safety', 'Occupational health', 'Research studies'],
                turnaround: '3-5 business days',
                certification: 'EPA Method 8270 certified'
            },
            'consultancy': {
                title: 'Expert Consultancy',
                icon: '💼',
                description: 'Professional consulting services providing technical expertise, method development, regulatory guidance, and analytical problem-solving support.',
                features: [
                    'Method development and validation',
                    'Regulatory compliance guidance',
                    'Quality system implementation',
                    'Technical training and education',
                    'Data interpretation and reporting',
                    'Expert witness services'
                ],
                applications: ['Laboratory setup', 'Regulatory submissions', 'Quality assurance', 'Technical audits'],
                turnaround: 'Project dependent',
                certification: 'ISO 17025 expertise'
            },
            'tph': {
                title: 'Total Petroleum Hydrocarbon Analysis',
                icon: '🛢️',
                description: 'Comprehensive analysis of petroleum hydrocarbon contamination in soil, water, and other environmental matrices.',
                features: [
                    'TPH-DRO (Diesel Range Organics)',
                    'TPH-GRO (Gasoline Range Organics)',
                    'BTEX compound analysis',
                    'PAH screening in petroleum products',
                    'Weathering pattern assessment',
                    'Source fingerprinting studies'
                ],
                applications: ['Environmental remediation', 'Site assessment', 'Regulatory compliance', 'Litigation support'],
                turnaround: '3-4 business days',
                certification: 'EPA Method 8015 certified'
            },
            'nanoparticles': {
                title: 'Nanoparticle Analysis',
                icon: '⚛️',
                description: 'Advanced characterization of nanoparticles including size distribution, morphology, surface properties, and stability assessment.',
                features: [
                    'Particle size and distribution analysis',
                    'Surface area and porosity measurement',
                    'Zeta potential determination',
                    'Morphological characterization',
                    'Crystallinity assessment',
                    'Stability and aggregation studies'
                ],
                applications: ['Nanotechnology research', 'Drug delivery', 'Materials science', 'Environmental safety'],
                turnaround: '4-7 business days',
                certification: 'ISO 22412 compliant'
            },
            'anti-inflammatory': {
                title: 'Anti-inflammatory Analysis',
                icon: '🩺',
                description: 'Assessment of anti-inflammatory properties and biomarker analysis for pharmaceutical, nutraceutical, and natural product applications.',
                features: [
                    'Inflammatory biomarker quantification',
                    'Cytokine level measurement',
                    'COX and LOX enzyme inhibition assays',
                    'Cell-based inflammation models',
                    'Antioxidant-inflammation correlation',
                    'Mechanism of action studies'
                ],
                applications: ['Drug development', 'Nutraceutical research', 'Clinical studies', 'Natural products'],
                turnaround: '5-8 business days',
                certification: 'GLP validated assays'
            }
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupIntersectionObserver();
        this.setupScrollAnimations();
    }

    setupEventListeners() {
        // Mobile menu toggle
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (mobileToggle && navMenu) {
            mobileToggle.addEventListener('click', () => {
                mobileToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
                
                // Update aria-expanded for accessibility
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
        }

        // Service item clicks
        const serviceItems = document.querySelectorAll('.service-item');
        serviceItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const serviceId = item.getAttribute('data-service');
                this.showServiceModal(serviceId);
            });

            // Add keyboard support
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const serviceId = item.getAttribute('data-service');
                    this.showServiceModal(serviceId);
                }
            });

            // Make service items focusable
            item.setAttribute('tabindex', '0');
        });

        // Modal close events
        const modal = document.getElementById('serviceModal');
        const modalClose = document.querySelector('.modal-close');

        if (modalClose) {
            modalClose.addEventListener('click', () => {
                this.hideServiceModal();
            });
        }

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.hideServiceModal();
                }
            });
        }

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideServiceModal();
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-container')) {
                mobileToggle?.classList.remove('active');
                navMenu?.classList.remove('active');
                mobileToggle?.setAttribute('aria-expanded', 'false');
            }
        });

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
    }

    showServiceModal(serviceId) {
        const serviceData = this.serviceData[serviceId];
        if (!serviceData) return;

        const modal = document.getElementById('serviceModal');
        const modalBody = modal.querySelector('.modal-body');

        // Generate modal content
        const modalContent = `
            <div class="modal-header">
                <div class="modal-icon">${serviceData.icon}</div>
                <h2 class="modal-title">${serviceData.title}</h2>
            </div>
            <p class="modal-description">${serviceData.description}</p>
            <div class="modal-features">
                <h4>Key Features & Capabilities:</h4>
                <ul class="feature-list">
                    ${serviceData.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="modal-applications">
                <h4>Applications:</h4>
                <ul class="feature-list">
                    ${serviceData.applications.map(app => `<li>${app}</li>`).join('')}
                </ul>
            </div>
            <div class="modal-details">
                <h4>Additional Information:</h4>
                <p><strong>Turnaround Time:</strong> ${serviceData.turnaround}</p>
                <p><strong>Certification:</strong> ${serviceData.certification}</p>
            </div>
            <div class="modal-cta">
                <a href="contact.html" class="modal-cta-button">Request a Quote</a>
            </div>
        `;

        modalBody.innerHTML = modalContent;
        modal.classList.add('active');

        // Focus on modal for accessibility
        modal.focus();
    }

    hideServiceModal() {
        const modal = document.getElementById('serviceModal');
        modal.classList.remove('active');

        // Return focus to the triggering element (if possible)
        const activeElement = document.activeElement.closest('.service-item');
        if (activeElement) {
            activeElement.focus();
        }
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

        const elements = document.querySelectorAll('.hero-content, .section-header, .service-category, .process-step, .cta-content');
        elements.forEach(el => observer.observe(el));
    }

    setupScrollAnimations() {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.service-item, .process-step');
            const windowHeight = window.innerHeight;

            elements.forEach((el, index) => {
                const rect = el.getBoundingClientRect();
                if (rect.top <= windowHeight * 0.8) {
                    el.classList.add(index % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new ServicesApp();
});
