import Header from "./components/Header";
import "./styles/empdetails.css";
import { useGetEmployeeQuery } from "./services/employee";

const EmployeeDetails = (props) => {
    const { id } = props;
    const { data: emp, error, isLoading } = useGetEmployeeQuery(id);



    if (emp) {
        return (
            <>
               
                    <Header
                        title="Employee details"
                        options={
                            {
                                filter: false,
                                button: false
                            }
                        }
                        className="header2"
                    />
                    {
                        error ?
                            (
                                <>Error</>
                            ) : isLoading ? (
                                <>Loading</>
                            ) : emp ? (
                                <>
                                    <div className="emp-details">
                                        {
                                            Object.keys(emp.data).map((key) => {
                                                return (
                                                    <div className="emp-details-column">
                                                        <div className="emp-details-attribute"><p>{key}</p></div>
                                                        <div className="emp-details-attribute"><p>{emp.data[key]}</p></div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </>
                            ) : null
                    }
                

            </>
        )
    }
}

//     return (
//         <>
//             <main>
//                 <Header
//                     title="Employee Details"
//                     options={
//                         {
//                             filter: false,
//                             button: false
//                         }
//                     }
//                     className="header2"
//                 />
//                 <div className="details">
//                     {
//                         Object.keys(details).map((key) => {
//                             return (
//                                 <div className="emp-details-field">
//                                     <p>{key}</p>
//                                     <p>{details[key]}</p>
//                                 </div>
//                             )

//                         })
//                     }
//                 </div>
//             </main>
//         </>
//     )
// }

export default EmployeeDetails;