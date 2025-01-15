// Get the toggle buttons and price cards
const buttons = document.querySelectorAll('.price_btn');
const priceCards = document.querySelectorAll('.price_card');
const standardPrice = document.getElementById('standardPrice');
const agencyPrice = document.getElementById('agencyPrice');
const standardlength = document.getElementById('standardlength');
const agencylength = document.getElementById('agencylength');

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
        standardlength.textContent = 'per month';
        agencyPrice.textContent = '$1000';
        agencylength.textContent = 'per month';
    } else if (billingType === 'annual') {
        standardPrice.textContent = '$2400';
        standardlength.textContent = 'per year';
        agencyPrice.textContent = '$9600';
        agencylength.textContent = 'per year';
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