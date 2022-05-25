import styles from "./event-list.module.css";

/**
 * A list of events in card style
 * @param {Array<{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean}>}events
 * @returns {JSX.Element}
 * @constructor
 */
import EventListItem from "./event-list-item";

function EventList({events}) {
    return (
        <ul className={styles.EventList}>
            {events.map(event => <EventListItem event={event} key={event.id}/>)}
        </ul>
    );
}

export default EventList;