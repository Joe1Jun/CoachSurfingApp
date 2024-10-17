//make sure to include .js even in the typescript file.
import { LoyaltyLevels } from "./enums.js";
const reviewTotalDisplay = document.querySelector('#reviews');
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
export function showReview(value, reviewer, loyaltyUser) {
    let reviewIcon = ' ';
    if (loyaltyUser === LoyaltyLevels.GOLD_USER) {
        reviewIcon = '⭐️';
    }
    else {
        reviewIcon = ' ';
    }
    if (reviewTotalDisplay) {
        reviewTotalDisplay.innerHTML = `Review total: ${value} | Last reviewed by ${reviewer} ${reviewIcon}`;
    }
}
export function populateUser(isReturning, userName) {
    if (returningUserDisplay) {
        returningUserDisplay.innerHTML = isReturning ? 'Back' : '';
    }
    if (userNameDisplay) {
        userNameDisplay.innerHTML = userName;
    }
}
