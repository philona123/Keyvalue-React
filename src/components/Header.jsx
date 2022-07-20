import Button from "./Button";
import "../styles/button.css";

const Header = (props) => {
    const { title, options, className } = props;

    return (
        <>
            <div className={className}>
                <p className="header-title">{title}</p>
                <div className="header-options">
                    {(options.filter) ? 
                        (
                            <p className="header-filter">Filter</p>
                        )                
                        : 
                        ( <></> )
                    }
                    {(options.button) ?
                        <Button handleClick={options.button.onClick}  className="createbtn"/>
                        :
                        <></>
                    }
                </div>
            </div>
        </>
    )
}

export default Header;