const reviewTotalDisplay = document.querySelector('#reviews');
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
export function showReviewTotal(value, reviewer, isLoyalty) {
    const reviewTotalDisplay = document.querySelector('#reviews');
    const iconDisplay = isLoyalty ? '⭐' : '';
    if (reviewTotalDisplay) {
        reviewTotalDisplay.innerHTML = `Review total: ${value} | Last reviewed by ${reviewer} ${iconDisplay}`;
    }
}
export function populateUser(isReturning, userName) {
    const returningUserDisplay = document.querySelector('#returning-user');
    const userNameDisplay = document.querySelector('#user');
    if (returningUserDisplay) {
        returningUserDisplay.innerHTML = isReturning ? 'Back' : '';
    }
    if (userNameDisplay) {
        userNameDisplay.innerHTML = userName;
    }
}
