
// Object Types Challenge
// Based on what we discussed we need to make up our Property Objects and array,
// can you create that array, making sure to assign the correct Types?

//This imports the functions from the utils.ts file
import { showReviewTotal, populateUser } from './utils'
let isOpen: boolean

// Reviews
const reviews : { 
    name: string; 
    stars: number; 
    loyaltyUser: boolean; 
    date: string
    }[] = [
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

// User
const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[]
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

//Properties

const properties: {
    image: string;
    title: string;
    price: number;
    location: {
        address: string;
        town_city: string;
        postcode: string;
        country: string;
    }
   
    contact: string;
    available: boolean;
}[] = [{
    

    image:'',
    title: '',
    price: 5,
    address: '',
    town_city: '',
    postcode: '',
    country: '',
    contact: '',
    available: true



}
    


]

  
    





// Functions
//These functions expect to be passed values of the same types defined in their function
// This is similiar to java.  The arguments are defined based on type in the function . This means errors show up easier.
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)