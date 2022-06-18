import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import {useRouter} from "next/router";
import {getAllEvents} from "../../api/events";

function EventsPage(props) {

    const {events} = props;
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

export async function getStaticProps() {
    const events = await getAllEvents();
    return {
        props: {
            events,
        },
        revalidate: 60,
    }
}

export default EventsPage;