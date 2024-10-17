
// Enum Types mini-challenge
// Replace the value of loyaltyUser to a GOLD_USER, SILVER_USER or BRONZE_USER, making sure to
// use what we learnt about Enums in the previous lesson. Make Sheia GOLD, Andrzej BRONZE 
// and Omar SILVER.
// 2. export the enum
// 3. Fix the function in the utils to show Sheias star as she is a GOLD_USER.


//This imports the functions from the utils.ts file
//When importing name the file.js as it wont automaticcaly update when transpiled to javascript
import { showReview, populateUser } from './utils.js'
import { Permissions } from './enums.js'
import { LoyaltyLevels } from './enums.js';

// Select the container for properties
const propertiesContainer = document.querySelector(".properties");
const footer = document.querySelector('.footer')

// Reviews
const reviews : { 
    name: string; 
    stars: number; 
    loyaltyUser: LoyaltyLevels; 
    date: string
    }[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyLevels.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyLevels.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyLevels.SILVER_USER,
        date: '27-03-2021'
    },
]



const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    //the type here is now of type permissions
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}


// When creating an array like this in typesript make sure to define the 
// types first this leads to errors being thrown if the type does no match the one specified.
const properties: {
    image: string;
    title: string;
    price: number;
    location: {
       firstLine: string;
        city: string;
        postcode: string;
        country: string;
    }
   //tuple array of fixed length that takes in multiple data types which must be specified
    contact: [number , string];
    isAvailable: boolean;
}[] = [{
    

    image:'images/SriLanka.jpg',
    title: 'Beachside Villa',
    price: 5,
    location: {
        firstLine: 'Beach',
        city: 'Willigama',
        postcode: 'W21FTXS',
        country: 'Sri Lanka'
    },
    
    contact: [+1211251251,'jim@gmail.com'],
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
    contact: [+1211251251 ,'marywinkle@gmail.com'],
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
    


    ]
 // Add the properties to the Dashboard
// This is a continuation of the Challenge, in which you are asked to add
// the 3 properties image and title to the dashboard based on the 
// properties array

   

   function displayProperties ( properties : any){
            
         
            
         
            for (let i = 0; i < properties.length; i++) {
                // create a new div 
                const card = document.createElement('div')
                //This line is the same as in html saying class= "card"
                // This means all we can use this class in style etc.
                card.classList.add('card')
                //Makes the innerHTML the value of the properties.title at i
                card.innerHTML = properties[i].title
                // create a new element of image
                const image = document.createElement('img')

                image.setAttribute('src', properties[i].image)
                image.setAttribute('alt', properties[i].title); // Sets the alt text
                //append the image to to the card
                card.appendChild(image)
                // append the card to the container
                propertiesContainer.appendChild(card)
            }

   }

   displayProperties(properties)

 //use your location , current time and current temperature of your location.
// Tuples challenge
// 1. Add an array to the variable of currentLocation I have added. This array
// must have your current location, time, and degrees celcius of your location
// NOTE: make sure to make this a Tuple, to only allow those types in that
// structure.
// 2. Add this visually to a footer on your site
   let currentLocation : [ string, string, number ]

   const now = new Date()
   const currentTime = now.toLocaleTimeString();
   const location = "Hamburg"
   const temperature = 23
   currentLocation = [location, currentTime, temperature]

   footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]}  ${temperature}°C `

  


// Functions
//These functions expect to be passed values of the same types defined in their function
// This is similiar to java.  The arguments are defined based on type in the function . This means errors show up easier.
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Show total reviews and populate user information
    showReview(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
    populateUser(you.isReturning, you.firstName);
});