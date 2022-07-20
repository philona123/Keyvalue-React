import "../styles/styles.css"

const InputField = ({
    label,
    name,
    onChange,
    className,
    value
}) => {
    return (
        <div className={className}>
            <p>{label}</p>
            <input type="text" value={value} onChange={(event) => onChange(name, event.target.value)}/>
        </div>
    )
}

export default InputField