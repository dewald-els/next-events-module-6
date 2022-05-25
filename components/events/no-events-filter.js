import ButtonLink from "../ui/button-link";

function NoEventsFilter({year, month}) {

    const displayDate = new Date(year, month - 1, 1).toLocaleDateString("en-GB", {
        month: "long",
        year: "numeric"
    });
    return (
        <div className="container">
            <h1>There are no events in {displayDate}.</h1>
            <ButtonLink link="/events">Back to Events</ButtonLink>
        </div>
    )
}

export default NoEventsFilter;