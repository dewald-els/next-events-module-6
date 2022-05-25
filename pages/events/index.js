import {getAllEvents} from "../../events.mock";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import {useRouter} from "next/router";

function EventsPage() {

    const events = getAllEvents();
    const router = useRouter();

    const handleSearch = async (year, month) => {
        await router.push(`/events/${year}/${month}`);
    };

    return (
        <div className="container">
            <EventSearch onSearch={handleSearch}/>
            <EventList events={events}/>
        </div>
    );
}

export default EventsPage;