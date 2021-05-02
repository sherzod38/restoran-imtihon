import Avatar1 from '../assets/images/Avatar1.png'
import Avatar2 from '../assets/images/Avatar2.png'
import Avatar3 from '../assets/images/Avatar3.png'
import Avatar4 from '../assets/images/Avatar4.png'
import Avatar5 from '../assets/images/Avatar5.png'

// import {
//     settings1,
//     settings2,
//     settings3,
//     settings4,
//     settings5,
//     settings6,
//     settings7,
// } from '../assets/icons'
 


const customer = [
    {
        id: 1,
        avatar: Avatar1,
        name: "Eren Jaegar",
        menu: 'Spicy seasoned seafood noodles ',
        price: '$125',
        isCompleted:  true,
        isPreparing: false,
        isPending: false
    },
    {
        id: 2,
        avatar: Avatar2,
        name: "Reiner Braunn",
        menu: 'Salted Pasta with mushroom sauce ',
        price: '$145',
        isCompleted:  false,
        isPreparing: false,
        isPending: true
    },
    {
        id: 3,
        avatar: Avatar3,
        name: "Levi Ackerman",
        menu: 'Beef dumpling in hot and sour soup ',
        price: '$105',
        isCompleted:  false,
        isPreparing: true,
        isPending: false
    },
    {
        id: 4,
        avatar: Avatar4,
        name: "Historia Reiss",
        menu: 'Hot spicy fried rice with omelet ',
        price: '$45',
        isCompleted:  false,
        isPreparing: false,
        isPending: true
    },
    {
        id: 5,
        avatar: Avatar5,
        name: "Hanji Zoe",
        menu: 'Hot spicy fried rice with omelet',
        price: '$245',
        isCompleted:  false,
        isPreparing: false,
        isPending: true
    },
    {
        id: 5,
        avatar: Avatar5,
        name: "Hanji Zoe",
        menu: 'Hot spicy fried rice with omelet',
        price: '$245',
        isCompleted:  false,
        isPreparing: false,
        isPending: true
    },
]

const settings = [
    {
        id: 1,
        // icons: settings1,
        title: 'Appereance',
        item: 'Dark and Light mode, Font size'
    },
    {
        id: 2,
        // icons: Settings.settings2,
        title: 'Your Restaurant',
        item: 'Dark and Light mode, Font size'
    },
    {
        id: 3,
        // icons: Settings.settings3,
        title: 'Products Management',
        item: 'Manage your product, pricing, etc'
    },
    {
        id: 4,
        // icons: Settings.settings4,
        title: 'Notifications',
        item: 'Customize your notifications'
    },
    {
        id: 5,
        // icons: Settings.settings5,
        title: 'Security',
        item: 'Configure Password, PIN, etc'
    },
    {
        id: 6,
        // icons: Settings.settings6,
        title: 'Security',
        item: 'Configure Password, PIN, etc'
    },
    {
        id: 7,
        // icons: Settings.settings7,
        title: 'About Us',
        item: 'Find out more about Posly'
    },
]

 export default customer;
 