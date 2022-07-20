import Button from "./Button";
// import "../styles/button.css";

const Header = (props) => {
    const { title, options, className } = props;

    return (
        <>
            <div className={className}>
                <p className="header-title">{title}</p>
                <div className="header-options">
                    {(options.button) ?

                        <Button handleClick={options.button.onClick} label={options.button.content} className="createbtn1" />
                        :
                        <></>
                    }
                    {(options.filter) ?
                        (
                            <p className="createtext1">Create Employee</p>
                        )
                        :
                        (<></>)
                    }
                </div>
            </div>
        </>
    )
}

export default Header;