import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

const Card = (props) => {
    const { fields, isHeader, className, onClick } = props;
    const empId = fields["Employee ID"];
    console.log(empId);
    console.log(fields);

    return (
        <>       
            <div className={className}>
                {
                    Object.keys(fields).map((field, i) => {
                        if(field !== "Action")
                            return (
                                <div key={i} className="field" onClick={event => onClick(empId, false, false)}> 
                                        {fields[field]}
                                </div>
                            )
                        else if(isHeader){
                            return (
                                <div key={i} className="field" onClick={event => onClick(empId, false, false)}> 
                                        {fields[field]}
                                </div>
                            )
                        }
                        else {
                            return (
                                <div key={i} className="field icons"> 
                                    <MdOutlineDelete className="delete-icon" onClick={event => onClick(empId, false, true)}/>
                                    <MdOutlineEdit className="edit-icon" onClick={event => onClick(empId, true, false)}/>
                                </div>
                            )
                        }
                    })
                }
                    {/* fields.map( field => {
                        return (
                            <div className="field">
                                {field}
                            </div>
                        )
                    }) */}
            </div>
        </>
    )
}

export default Card;