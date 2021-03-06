import Button from "../ui/button";
import css from "./event-search.module.css";
import {useRef} from "react";

function EventSearch({onSearch}) {

    const yearRef = useRef();
    const monthRef = useRef();

    const onSubmit = (event) => {
        event.preventDefault();
        const year = yearRef.current.value;
        const month = monthRef.current.value;
        onSearch(year, month);
    };

    return (
        <form className={css.EventSearch} onSubmit={onSubmit}>
            <fieldset className={css.EventSearch_Controls}>
                <div className={css.EventSearch_Controls__Group}>
                    <label htmlFor="year">Year</label>
                    <select name="year" id="year" ref={yearRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={css.EventSearch_Controls__Group}>
                    <label htmlFor="month">Month</label>
                    <select name="month" id="month" ref={monthRef}>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
            </fieldset>

            <Button type="submit">Find Events</Button>
        </form>
    );
}

export default EventSearch;