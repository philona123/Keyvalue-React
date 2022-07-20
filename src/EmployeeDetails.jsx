import Header from "./components/Header";
import "./styles/styles.css";
import { useGetEmployeeQuery } from "./services/employee";

const EmployeeDetails = (props) => {
    const { id } = props;
    const { data: emp, error, isLoading } = useGetEmployeeQuery(id);



    if (emp) {
        return (
            <>
                <main>
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
                                    <div className="details">
                                        {
                                            Object.keys(emp.data).map((key) => {
                                                return (
                                                    <div className="emp-details-field">
                                                        <p>{key}</p>
                                                        <p>{emp.data[key]}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </>
                            ) : null
                    }
                </main>

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