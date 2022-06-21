import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import {useRouter} from "next/router";
import {getAllEvents} from "../../api/events";
import Head from "next/head";

function EventsPage(props) {

    const {events} = props;
    const router = useRouter();

    const handleSearch = async (year, month) => {
        await router.push(`/events/${year}/${month}`);
    };

    return (
        <>
            <Head>
                <title>NextJS - All Events</title>
            </Head>
            <div className="container">
                <EventSearch onSearch={handleSearch}/>
                <EventList events={events}/>
            </div>
        </>

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