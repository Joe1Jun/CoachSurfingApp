

const reviewTotalDisplay = document.querySelector('#reviews')
const recentReviewerDisplay = document.querySelector('#mostRecent-reviewer')



const reviews  = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]
// attaching types to both parameters to make sure they can only be of those types
function showReviewTotal(value: number, reviewer: string, loyaltyUser: boolean) {
    const iconDisplay = loyaltyUser ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
    
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)



