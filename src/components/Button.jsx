import '../styles/button.css'

const Button = (props) => {
    const {label, handleClick, name, className} = props;

    return (
        <button onClick={event => handleClick(name)} className={className}>
            {label}
        </button>
    );
}

export default Button;