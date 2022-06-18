import CalendarIcon from "../ui/icons/calendar";
import LocationIcon from "../ui/icons/location";
import css from "./event-logistics.module.css";
import Card from "../ui/card";

function EventLogistics({date, address}) {

    return (
        <Card>
            <h4>INFO</h4>
            <section className={css.EventLogistics}>
                <p className={css.EventLogistics_Item}>
                    <span><CalendarIcon size={24}/></span>
                    <span>{date}</span>
                </p>
                <p className={css.EventLogistics_Item}>
                    <span><LocationIcon size={24}/></span>
                    <span>{address}</span>
                </p>
            </section>
        </Card>
    );
}

export default EventLogistics;