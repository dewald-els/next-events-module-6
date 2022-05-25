import Link from "next/link";
import css from "./button-link.module.css";

function ButtonLink(props) {
    return (
        <Link href={props.link}>
            <a className={css.Button}>{props.children}</a>
        </Link>
    );
}

export default ButtonLink;