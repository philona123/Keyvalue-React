import Header from "./components/Header";
import Card from "./components/Card"
import EmployeeDetails from "./EmployeeDetails";
import { useState } from "react";
import CreateEmployee from "./CreateEmployee";
import SideNav from "./components/SideNav";
import Divider from "./components/Divider";
import { useGetEmployeesQuery, useDeleteEmployeeMutation } from './services/employee'
import UpdateEmployee from "./UpdateEmployee";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
    const [page, setPage] = useState("List");
    const [ empSelected, setEmpSelected ] = useState("");
    const { data, error, isLoading } = useGetEmployeesQuery();
    const [ deleteEmployee ] = useDeleteEmployeeMutation();
    const navigate = useNavigate();
    
    const handleDeleteEmployee = async () => {
        console.log(empSelected.id)
        if(empSelected.id){
            await deleteEmployee(empSelected.id)
            navigate("/employees")
        }
    }

    const onCardClick = async (empId, isEdit, isDelete) => {
        console.log(empId, "hhh");
        if(empId) {
            
            let emp = data.data.employees.find(emp => emp["id"] === empId)
            setEmpSelected(emp);

            if(isEdit)
                setPage("UpdateEmployee")
            else if(isDelete){
                console.log(emp);
                await handleDeleteEmployee();
                setPage("List")
            }
            else
                setPage("EmployeeDetails");
        }
    }

    const onCreateEmpClick = () => {
        setPage("CreateEmployee")
    }

    return (
        <>
            <SideNav/>
            {/* <Divider/> */}
            { 
                (page === "List" )? 
                (
                    <main>
                        <Header 
                            title="Employee List"
                            options={
                                {
                                    filter: true,
                                    button: {
                                        isValid: true,
                                        // label: "+",
                                        content: "+",
                                        description: "Create Employee",
                                        className: "btn-create-emp",
                                        onClick: onCreateEmpClick
                                    }
                                }
                            }
                            className="header"
                        />
                        <Card 
                            fields={
                                {
                                    "Employee Name": "Employee Name",
                                    "Employee ID": "Employee ID",
                                    "Joining Date": "Joining Date",
                                    "Role": "Role",
                                    "Status": "Status",
                                    "Experience": "Experience",
                                    "Action": "Action"
                                }
                            }
                            isHeader={true}
                            className="card-header"
                            onClick={() => {}}
                        />
                        {
                            error ? (
                                <>Oh no, there was an error</>
                            ) : isLoading ? (
                                <>Loading...</>
                            ) : data ? (
                                <> 
                                    {
                                        data.data.employees.map(emp => {
                                            {/* console.log(emp); */}
                                            return (
                                                <Card 
                                                    fields={
                                                        {
                                                            "Employee Name": emp["name"],
                                                            "Employee ID": emp["id"],
                                                            "Joining Date": emp["joindate"],
                                                            "Role": emp["role"],
                                                            "Status": emp["status"],
                                                            "Experience": emp["experience"],
                                                            "Action": "action"
                                                        }
                                                    }
                                                    isHeader={false}
                                                    className="card"
                                                    onClick={onCardClick}
                                                />
                                            )
                                        })
                                    }
                                </>
                            ) : null
                        }
                    </main>
                )
                :

                ( 
                    (page === "EmployeeDetails") ?
                    <main>
                        {console.log(empSelected)}
                        <EmployeeDetails 
                            id={empSelected["id"]}
                        />
                    </main>
                    : 
                    (page === "CreateEmployee") ?
                        <>
                            <CreateEmployee />
                        </>
                    :
                        <>
                            <UpdateEmployee emp={empSelected}/>
                        </>
                )
            }
        </>
    )
}

export default EmployeeList;