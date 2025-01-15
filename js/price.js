// Get the toggle buttons and price cards
const buttons = document.querySelectorAll('.price_btn');
const priceCards = document.querySelectorAll('.price_card');
const standardPrice = document.getElementById('standardPrice');
const agencyPrice = document.getElementById('agencyPrice');

// Function to update the URL parameter
function updateURLParam(param, value) {
    const url = new URL(window.location);
    url.searchParams.set(param, value);
    window.history.replaceState({}, '', url);
}

// Function to switch pricing
function updatePrices(billingType) {
    // Update button styles
    buttons.forEach((btn) => btn.classList.remove('active'));
    const activeButton = document.querySelector(`.price_btn[data-billing="${billingType}"]`);
    activeButton.classList.add('active');

    // Update prices based on billing type
    if (billingType === 'monthly') {
        standardPrice.textContent = '$250';
        agencyPrice.textContent = '$1000';
    } else if (billingType === 'annual') {
        standardPrice.textContent = '$2400';
        agencyPrice.textContent = '$9600';
    }
}

// Initialize pricing on page load
function initializePricing() {
    const params = new URLSearchParams(window.location.search);
    let billingType = params.get('b');

    // Default to "monthly" if no parameter exists
    if (!billingType) {
        billingType = 'monthly';
        updateURLParam('b', billingType);
    }

    updatePrices(billingType);
}

// Add event listeners to toggle buttons
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const billingType = btn.getAttribute('data-billing');
        updatePrices(billingType);
        updateURLParam('b', billingType);
    });
});

// Add event listeners to price cards
priceCards.forEach((card) => {
    card.addEventListener('click', () => {
        const planType = card.getAttribute('data-plan');
        alert(`You selected the ${planType} plan.`);
    });
});

// Run the initialization function
initializePricing();