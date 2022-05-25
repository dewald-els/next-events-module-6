import CalendarIcon from "../ui/icons/calendar";
import LocationIcon from "../ui/icons/location";
import css from "./event-logistics.module.css";

function EventLogistics({image, imageAlt, date, address}) {

    console.log(image)

    return (
        <section className={css.EventLogistics}>
            <header>
                <img className={css.EventLogistics_Image} src={"/" + image} alt={imageAlt}/>
            </header>
            <div className="container">
                <p className={css.EventLogistics_Item}>
                    <span><CalendarIcon size={24}/></span>
                    <span>{date}</span>
                </p>
                <p className={css.EventLogistics_Item}>
                    <span><LocationIcon size={24}/></span>
                    <span>{address}</span>
                </p>
            </div>
        </section>
    );
}

export default EventLogistics;