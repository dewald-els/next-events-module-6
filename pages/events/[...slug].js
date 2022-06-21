import Head from "next/head";
import EventList from "../../components/events/event-list";
import ButtonLink from "../../components/ui/button-link";
import NoEventsFilter from "../../components/events/no-events-filter";
import {humanReadableDate} from "../../utils/date";
import {getAllEvents} from "../../api/events";

function FilteredEventsPage(props) {


    const {events, year, month} = props;

    const date = {
        year: Number(year),
        month: Number(month)
    };

    if (!events || events.length === 0) {
        return <NoEventsFilter year={date.year} month={date.month}/>
    }

    const displayDate = humanReadableDate({year, month, day: 1}, {
        year: "numeric",
        month: "long"
    })

    return (
        <>
            <Head>
                <title>NextJS - Events for {date.month} {date.year}</title>
            </Head>
            <div className="container">
                <header>
                    <h1>Events in {displayDate}</h1>
                    <ButtonLink link={"/events"}>Show All Events</ButtonLink>
                </header>
                <EventList events={events}/>
            </div>
        </>
    );
}

export async function getServerSideProps(context) {

    const {params} = context;
    const [year, month] = params.slug;

    const date = {
        year: Number(year),
        month: Number(month)
    };

    if (isNaN(date.year) || isNaN(date.month) || month < 1 || month > 12) {
        return {
            notFound: true
        }
    }

    const events = await getAllEvents();

    let filteredEvents = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === date.year && eventDate.getMonth() === date.month - 1;
    });

    return {
        props: {
            year,
            month,
            events: filteredEvents
        }
    }
}

export default FilteredEventsPage;