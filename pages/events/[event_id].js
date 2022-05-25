import {useRouter} from "next/router";
import {getEventById} from "../../events.mock";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";

function EventDetailPage() {

    const router = useRouter();
    const {event_id} = router.query;

    if (!event_id) {
        return <p>Loading event...</p>
    }

    /**
     * @type {{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean}}
     */
    const event = getEventById(event_id);

    if (!event) {
        return <p>No event found</p>
    }

    return (
        <div>
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}/>

            <div className="container">

                <EventContent title={event.title} description={event.description}/>
            </div>
        </div>
    );
}

export default EventDetailPage;