import {getFeaturedEvents} from "../events.mock";
import EventList from "../components/events/event-list";

function HomePage() {

    const featuredEvents = getFeaturedEvents();

    return (
        <div className="container">
            <EventList events={featuredEvents}/>
        </div>
    )
}

export default HomePage;