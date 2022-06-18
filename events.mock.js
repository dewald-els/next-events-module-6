/*
/!**
 * Events Array
 * @type {[{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean},{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean},{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean}]}
 *!/
const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Programming for everyone',
        description:
            'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
        location: 'Somestreet 25, 12345 San Somewhereo',
        date: '2021-05-12',
        image: 'images/coding-event.jpg',
        isFeatured: false,
    },
    {
        id: 'e2',
        title: 'Networking for introverts',
        description:
            "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
        location: 'New Wall Street 5, 98765 New Work',
        date: '2021-05-30',
        image: 'images/introvert-event.jpg',
        isFeatured: true,
    },
    {
        id: 'e3',
        title: 'Networking for extroverts',
        description:
            'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
        location: 'My Street 12, 10115 Broke City',
        date: '2022-04-10',
        image: 'images/extrovert-event.jpg',
        isFeatured: true,
    },
];

/!**
 * Get featured events
 * @returns {({date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean}|{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean}|{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean})[]}
 *!/
export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

/!**
 * Get all events
 * @returns {[{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean},{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean},{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean}]}
 *!/
export function getAllEvents() {
    return DUMMY_EVENTS;
}

/!**
 * Get events by a specific date
 * @param dateFilter
 * @returns {({date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean}|{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean}|{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean})[]}
 *!/
export function getFilteredEvents(dateFilter) {
    const {year, month} = dateFilter;

    let filteredEvents = DUMMY_EVENTS.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
}

/!**
 * Get an event by its id.
 * @param id
 * @returns {{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean} | {date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean} | {date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean}}
 *!/
export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
}*/
