// Product array data
const products = [
    { id: 1, name: "Smart Home Security Camera" },
    { id: 2, name: "Wireless Bluetooth Headphones" },
    { id: 3, name: "LED Smart Light Bulbs" },
    { id: 4, name: "Portable Phone Charger" },
    { id: 5, name: "Smart Thermostat" },
    { id: 6, name: "Fitness Tracker Watch" },
    { id: 7, name: "Robot Vacuum Cleaner" },
    { id: 8, name: "Smart Door Lock" },
    { id: 9, name: "Wireless Charging Pad" },
    { id: 10, name: "Smart Speaker" }
];

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Populate product select options
    populateProductSelect();
    
    // Set last modified date
    setLastModified();
    
    // Add form submission handler
    const form = document.getElementById('reviewForm');
    form.addEventListener('submit', handleFormSubmission);
});

// Populate product select dropdown
function populateProductSelect() {
    const productSelect = document.getElementById('productName');
    
    // Clear existing options except the first placeholder
    while (productSelect.children.length > 1) {
        productSelect.removeChild(productSelect.lastChild);
    }
    
    // Add products as options
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Set last modified date in footer
function setLastModified() {
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        const lastModified = new Date(document.lastModified);
        lastModifiedElement.textContent = lastModified.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

// Handle form submission
function handleFormSubmission(event) {
    // Get form data before submission
    const formData = new FormData(event.target);
    
    // Store form data in localStorage for the confirmation page
    const reviewData = {
        productName: formData.get('productName'),
        rating: formData.get('rating'),
        installDate: formData.get('installDate'),
        features: formData.getAll('features'),
        writtenReview: formData.get('writtenReview'),
        userName: formData.get('userName'),
        submissionTime: new Date().toISOString()
    };
    
    // Store the review data
    localStorage.setItem('currentReview', JSON.stringify(reviewData));
    
    // Increment review counter
    incrementReviewCounter();
}

// Increment the review counter in localStorage
function incrementReviewCounter() {
    let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount.toString());
}
