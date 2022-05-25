import Link from "next/link";
import css from "./main-header.module.css";


function MainHeader() {
    return (
        <header className={css.MainHeader}>
            <div className={css.MainHeader_Logo}>
                <Link href="/">Next Events</Link>
            </div>
            <nav className={css.MainHeader_Nav}>
                <ul className={css.MainHeader_NavItems}>
                    <li><Link href="/">Featured Events</Link></li>
                    <li><Link href="/events">Browse Events</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;