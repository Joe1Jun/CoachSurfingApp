//This imports the functions from the utils.ts file
//When importing have ti name the file.js as it wont automaticcaly update when transpiled to javascript
import { showReviewTotal, populateUser } from './utils.js';
let isOpen;
const footer = document.querySelector('.footer');
// Reviews
const reviews = [
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
// User
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
// When creating an array like this in typesript make sure to define the 
// types first this leads to errors being thrown if the type does no match the one specified.
const properties = [{
        image: 'images/SriLanka.jpg',
        title: 'Beachside Villa',
        price: 5,
        location: {
            firstLine: 'Beach',
            city: 'Willigama',
            postcode: 'W21FTXS',
            country: 'Sri Lanka'
        },
        contact: [+1211251251, 'jim@gmail.com'],
        isAvailable: true
    },
    {
        image: 'images/Poland.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            postcode: 'RTT343903',
            country: 'Poland'
        },
        contact: [+1211251251, 'marywinkle@gmail.com'],
        isAvailable: false
    },
    {
        image: 'images/London.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            postcode: 'VT35433',
            country: 'Poland'
        },
        contact: [+1211251251, 'garydavis@hotmail.com'],
        isAvailable: false
    }
];
// Add the properties to the Dashboard
// This is a continuation of the Challenge, in which you are asked to add
// the 3 properties image and title to the dashboard based on the 
// properties array
// Select the container for properties
const propertiesContainer = document.querySelector(".properties");
function displayProperties(properties) {
    for (let i = 0; i < properties.length; i++) {
        // create a new div 
        const card = document.createElement('div');
        //This line is the same as in html saying class= "card"
        // This means all we can use this class in style etc.
        card.classList.add('card');
        //Makes the innerHTML the value of the properties.title at i
        card.innerHTML = properties[i].title;
        // create a new element of image
        const image = document.createElement('img');
        image.setAttribute('src', properties[i].image);
        image.setAttribute('alt', properties[i].title); // Sets the alt text
        //append the image to to the card
        card.appendChild(image);
        // append the card to the container
        propertiesContainer.appendChild(card);
    }
}
displayProperties(properties);
//use your location , current time and current temperature of your location.
// Tuples challenge
// 1. Add an array to the variable of currentLocation I have added. This array
// must have your current location, time, and degrees celcius of your location
// NOTE: make sure to make this a Tuple, to only allow those types in that
// structure.
// 2. Add this visually to a footer on your site
let currentLocation;
const now = new Date();
const currentTime = now.toLocaleTimeString();
const location = "Hamburg";
const temperature = 23;
currentLocation = [location, currentTime, temperature];
footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]}  ${temperature}°C `;
// Functions
//These functions expect to be passed values of the same types defined in their function
// This is similiar to java.  The arguments are defined based on type in the function . This means errors show up easier.
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Show total reviews and populate user information
    showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
    populateUser(you.isReturning, you.firstName);
});
