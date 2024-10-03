var reviewTotalDisplay = document.querySelector('#reviews');
var recentReviewerDisplay = document.querySelector('#mostRecent-reviewer');
var reviews = [
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
];
function displayNumberofReviews(reviewsCount) {
    //The ! in TypeScript is known as the non-null assertion operator. It tells TypeScript that you're sure the value is neither null nor undefined, even though TypeScript might think it could be.
    reviewTotalDisplay.innerHTML = "Total reviews: ".concat(reviewsCount);
    //It must check if not null below is an example of how to do it with an if statement
    // if (reviewTotalDisplay) {
    //     reviewTotalDisplay.innerHTML = "Total reviews: 3";
    // }
}
function displayMostRecentReviewer() {
    var mostRecentReviewer = reviews[0]; // Start with the first reviewer as the most recent
    for (var i = 0; i < reviews.length; i++) {
        var currentParsedDate = new Date(reviews[i].date);
        var mostRecentParsedDate = new Date(mostRecentReviewer.date);
        //compare dates
        if (currentParsedDate > mostRecentParsedDate) {
            mostRecentReviewer = reviews[i];
        }
    }
    recentReviewerDisplay.innerHTML = mostRecentReviewer.name;
}
displayNumberofReviews(reviews.length);
displayMostRecentReviewer();
