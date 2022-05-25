import css from "./event-list-item.module.css";
import Link from "next/link";
import ButtonLink from "../ui/button-link";
import ChevronRightIcon from "../ui/icons/chevron-right";
import CalendarIcon from "../ui/icons/calendar";
import LocationIcon from "../ui/icons/location";

/**
 * An Event Item child of EventList
 * @param {{date: string, image: string, description: string, location: string, id: string, title: string, isFeatured: boolean}} event
 * @returns {JSX.Element}
 * @constructor
 */
function EventListItem({event}) {

    const humanReadableDate = new Date(event.date).toLocaleDateString("en-GB", {
        day: "numeric", month: "long", year: "numeric"
    });

    const formattedAddress = event.location.replace(", ", "\n");

    const eventLink = `/events/${event.id}`;

    return (<li className={css.EventItem}>
        <header>
            <img className={css.EventItem_Image} src={"/" + event.image} alt={event.title}/>
        </header>
        <section>
            <span className={css.EventItem_Title}>{event.title}</span>
            <div className={css.EventItem_Date}>
                <span><CalendarIcon size={24}/></span>
                <span>{humanReadableDate}</span>
            </div>
        </section>
        <section>
            <p className={css.EventItem_Address}>
                <LocationIcon size={24}/>
                <span>{formattedAddress}</span>
            </p>
        </section>
        <section>
            <ButtonLink link={eventLink}>
                <span>More info</span>
                <ChevronRightIcon size={24}/>
            </ButtonLink>
        </section>
    </li>);
}

export default EventListItem;