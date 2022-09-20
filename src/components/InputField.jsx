export default function InputField({ type, classes, placeholderText, style, value, setValue }) {
    return (
        <input
            type={type}
            placeholder={placeholderText || null}
            className={classes}
            style={style || null}
            onChange={setValue}
            value={value}
            required
        />
    );
}
