import EventList from "../components/events/event-list";
import {getFeaturedEvents} from "../api/events";

function HomePage(props) {

    const {featuredEvents = [], error} = props;

    if (error) {
        return <p>Could not get events. {error}</p>
    }

    return (
        <div className="container">
            <EventList events={featuredEvents}/>
        </div>
    )
}

export async function getStaticProps() {
    try {

        const events = await getFeaturedEvents();

        return {
            revalidate: 1800,
            props: {
                featuredEvents: [...events]
            }
        }
    } catch (e) {
        return {
            props: {
                error: e.message,
            }
        }
    }
}

export default HomePage;