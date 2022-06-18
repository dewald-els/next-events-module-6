export async function getAllEvents() {
    return fetch("https://nextjs-static-sites-default-rtdb.europe-west1.firebasedatabase.app/events.json")
        .then(r => r.json())
}

export async function getFeaturedEvents() {
    return await getAllEvents().then(events => events.filter(event => event.isFeatured));
}

export async function getEventById(eventId) {
    return await getAllEvents().then(events => events.find(e => e.id === eventId));
}