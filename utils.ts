const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')

export function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const reviewTotalDisplay = document.querySelector('#reviews');
    const iconDisplay = isLoyalty ? '⭐' : '';
    if (reviewTotalDisplay) {
        reviewTotalDisplay.innerHTML = `Review total: ${value} | Last reviewed by ${reviewer} ${iconDisplay}`;
    }
}

export function populateUser(isReturning: boolean, userName: string) {
    const returningUserDisplay = document.querySelector('#returning-user');
    const userNameDisplay = document.querySelector('#user');

    if (returningUserDisplay) {
        returningUserDisplay.innerHTML = isReturning ? 'Back' : '';
    }
    if (userNameDisplay) {
        userNameDisplay.innerHTML = userName;
    }
}