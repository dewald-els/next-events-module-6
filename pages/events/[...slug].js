import {getFilteredEvents} from "../../events.mock";
import {useRouter} from "next/router";
import EventList from "../../components/events/event-list";
import ButtonLink from "../../components/ui/button-link";
import NoEventsFilter from "../../components/events/no-events-filter";
import {humanReadableDate} from "../../utils/date";

function FilteredEventsPage() {

    const router = useRouter();

    if (!router.query.slug) {
        return <p>Loading events...</p>;
    }

    const [year, month] = router.query.slug;

    const date = {
        year: Number(year),
        month: Number(month)
    };

    if (isNaN(date.year) || isNaN(date.month) || month < 1 || month > 12) {
        router.replace("/events");
    }

    const filteredEvents = getFilteredEvents(date);

    if (!filteredEvents || filteredEvents.length === 0) {
        return <NoEventsFilter year={year} month={month}/>
    }

    const displayDate = humanReadableDate({year, month, day: 1}, {
        year: "numeric",
        month: "long"
    })

    return (
        <div className="container">
            <header>
                <h1>Events in {displayDate}</h1>
                <ButtonLink link={"/events"}>Show All Events</ButtonLink>
            </header>
            <EventList events={filteredEvents}/>
        </div>
    );
}

export default FilteredEventsPage;