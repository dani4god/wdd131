// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Load review data from localStorage
    loadReviewData();
    
    // Display review counter
    displayReviewCounter();
    
    // Set last modified date
    setLastModified();
});

// Load and display review data
function loadReviewData() {
    const reviewData = localStorage.getItem('currentReview');
    
    if (reviewData) {
        const review = JSON.parse(reviewData);
        populateReviewSummary(review);
    } else {
        // If no review data, try to get it from URL parameters
        loadFromURLParameters();
    }
}

// Populate review summary with data
function populateReviewSummary(review) {
    // Product Name
    const productNameElement = document.getElementById('productName');
    if (productNameElement && review.productName) {
        productNameElement.textContent = review.productName;
    }
    
    // Rating
    const ratingElement = document.getElementById('rating');
    if (ratingElement && review.rating) {
        ratingElement.innerHTML = generateStarRating(parseInt(review.rating));
    }
    
    // Installation Date
    const installDateElement = document.getElementById('installDate');
    if (installDateElement && review.installDate) {
        const date = new Date(review.installDate);
        installDateElement.textContent = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    // Features
    const featuresElement = document.getElementById('features');
    if (featuresElement && review.features) {
        if (review.features.length > 0) {
            featuresElement.textContent = review.features.join(', ');
        } else {
            featuresElement.textContent = 'None selected';
        }
    }
    
    // Written Review
    const writtenReviewElement = document.getElementById('writtenReview');
    const reviewTextSection = document.getElementById('reviewTextSection');
    if (writtenReviewElement && review.writtenReview && review.writtenReview.trim()) {
        writtenReviewElement.textContent = review.writtenReview;
        reviewTextSection.style.display = 'flex';
    }
    
    // User Name
    const userNameElement = document.getElementById('userName');
    const userNameSection = document.getElementById('userNameSection');
    if (userNameElement && review.userName && review.userName.trim()) {
        userNameElement.textContent = review.userName;
        userNameSection.style.display = 'flex';
    }
    
    // Submission Time
    const submissionTimeElement = document.getElementById('submissionTime');
    if (submissionTimeElement && review.submissionTime) {
        const submissionDate = new Date(review.submissionTime);
        submissionTimeElement.textContent = submissionDate.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

// Generate star rating display
function generateStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<span class="star-filled">★</span>';
        } else {
            stars += '<span class="star-empty">☆</span>';
        }
    }
    return stars;
}

// Load data from URL parameters (fallback method)
function loadFromURLParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    
    const review = {
        productName: urlParams.get('productName'),
        rating: urlParams.get('rating'),
        installDate: urlParams.get('installDate'),
        features: urlParams.getAll('features'),
        writtenReview: urlParams.get('writtenReview'),
        userName: urlParams.get('userName'),
        submissionTime: new Date().toISOString()
    };
    
    // Only populate if we have some data
    if (review.productName || review.rating) {
        populateReviewSummary(review);
    }
}

// Display and update review counter
function displayReviewCounter() {
    const counterElement = document.getElementById('reviewCounter');
    if (counterElement) {
        const reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
        counterElement.textContent = reviewCount;
    }
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
