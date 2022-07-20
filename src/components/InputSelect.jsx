import "../styles/styles.css"

const InputSelect = (props) => {
    const { name, label, options, className, onChange, selected } = props;
    return (
        <>
            <div className={className}>
                <div>{label}</div>
                <select name={name} onChange={event => onChange(name, event.target.value)}>
                    {options.map(option => {
                            if(option.value === selected)
                                return <option value={option.key} selected="selected">{option.value}</option>
                            else 
                                return <option value={option.key}>{option.value}</option>
                        })}
                </select>
            </div>
        </>
    )
}

export default InputSelect;