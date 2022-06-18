import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import {getEventById, getFeaturedEvents} from "../../api/events";
import EventDetailHeader from "../../components/event-detail/event-detail-header";

function EventDetailPage(props) {

    const {event, error} = props;

    if (error) {
        return <p>Could not find event.</p>
    }

    if (!event) {
        return <p>Loading event...</p>
    }

    return (
        <div>
            <EventDetailHeader image={event.image} imageAlt={event.title}/>
            <div className="container">
                <EventContent title={event.title} description={event.description}/>
                <EventLogistics date={event.date} address={event.location}/>
            </div>
        </div>
    );
}

export async function getStaticProps(context) {
    const {event_id} = context.params;
    const event = await getEventById(event_id);

    if (!event) {
        return {
            props: {
                error: "Could not find event"
            }
        }
    }

    return {
        revalidate: 30,
        props: {
            event,
        }
    }
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents();
    const paths = events.map(e => ({
        params: {
            event_id: e.id,
        }
    }))
    return {
        paths,
        fallback: true,
    }
}

export default EventDetailPage;