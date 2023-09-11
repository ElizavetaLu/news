export const topics = ['business', 'entertainment', 'environment', 'food', 'health', 'politics', 'science', 'sports', 'technology', 'top', 'tourism', 'world'];

export const socials = [
    {
        id: 0,
        name: 'Twitter',
        icon: 'twitter.png',
    },
    {
        id: 1,
        name: 'Facebook',
        icon: 'facebook.png',
    },
    {
        id: 2,
        name: 'Instagram',
        icon: 'instagram.png',
    },
    {
        id: 3,
        name: 'Youtube',
        icon: 'youtube.png',
    },
]

export const navigation = [
    {
        id: 0,
        name: 'home',
        path: '/',
        options: null
    },
    {
        id: 1,
        name: 'categories',
        path: '',
        options: topics
    },
    {
        id: 2,
        name: 'about',
        path: '*',
        options: null
    },
    {
        id: 3,
        name: 'search',
        path: 'search',
        options: null
    },
    {
        id: 4,
        name: 'work for WN',
        path: '*',
        options: null
    },
    {
        id: 5,
        name: 'contacts',
        path: '*',
        options: null
    }
]