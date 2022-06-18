import css from "./event-logistics.module.css";

function EventDetailHeader(props) {
    const {image, imageAlt} = props;

    return (
        <header>
            <img className={css.EventLogistics_Image} src={"/" + image} alt={imageAlt}/>
        </header>
    );
}

export default EventDetailHeader;