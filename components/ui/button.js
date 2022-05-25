import css from "./button-link.module.css";

function Button({children, type = "button"}) {
    return (
        <button className={css.Button}>
            {children}
        </button>
    );
}

export default Button;