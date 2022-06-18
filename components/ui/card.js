import css from "./card.module.css";

function Card({ children }) {
    return (
        <div className={css.Card}>
            { children }
        </div>
    );
}

export default Card;