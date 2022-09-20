export default function Button({ type, classes, innerText, onClick }) {
    return (
        <button type={type || 'submit'} className={classes} onClick={onClick}>
            {innerText}
        </button>
    );
}
