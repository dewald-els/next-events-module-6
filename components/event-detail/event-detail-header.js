import css from "./event-logistics.module.css";
import Image from "next/image";

function EventDetailHeader(props) {
    const {image, imageAlt} = props;

    return (
        <header className={css.EventLogistics_Image}>
            <Image src={"/" + image} alt={imageAlt} layout="fill" objectFit="contain" />
        </header>
    );
}

export default EventDetailHeader;