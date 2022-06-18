import css from "./event-content.module.css";
import Card from "../ui/card";

function EventContent({title, description}) {
    return (
        <section className={css.EventContent}>
            <Card>
                <h4>ABOUT</h4>
                <h1 className={css.EventContent_Title}>{title}</h1>
                <p>{description}</p>
            </Card>
        </section>
    );
}

export default EventContent;