import Header from "./components/Header";
import { useState } from "react";
import Form from "./components/Form";
import { useUpdateEmployeeMutation } from "./services/employee";

const UpdateEmployee = (props) => {
    const { emp } = props;

    const [ updatedEmpData, setUpdatedEmpData ] = useState(emp)
    console.log(updatedEmpData)

    const [ updateEmployee, { isLoading, error}] = useUpdateEmployeeMutation();
    const handleUpdateEmployee = async () => {
        try {
          await updateEmployee(updatedEmpData).unwrap()
          setUpdatedEmpData({})
        } catch {
          console.log({
            title: 'An error occurred',
            description: "We couldn't save your emp, try again!",
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
        }
      }

    const onClick = (name) => {
        if(name === "update")
            handleUpdateEmployee()
        else {

        }
    }

    const inputFields = [
        { label: "Employee Name", name: "name", type: "text", value: updatedEmpData.name},
        { label: "Password", name: "password", type: "text", value: updatedEmpData.password},
        { label: "Department ID", name: "departmentId", type: "text", value: updatedEmpData.departmentId},
        // { label: "Employee ID", name: "empId", type: "text"},
        // { label: "Employee Email", name: "email", type: "email"},
        // { label: "Joining Date", name: "joindate", type: "date" },
        // { label: "Experience", name: "experience", type: "text" },
        { label: "City", name: "city", type: "text" , value: updatedEmpData.city},
        { label: "State", name: "state", type: "text", value: updatedEmpData.state},
        { label: "Zip", name: "zip", type: "text", value: updatedEmpData.zip},
        // { label: "Upload ID proof", name: "id-proof", type: "file"}
    ]

    const inputSelects = [
        { 
            label: "Role", name: "role", selected: updatedEmpData.role,
            options: [
                { key: "hr", value: "HR" },
                { key: "manager", value: "Manager" },
                { key: "admin", value: "Admin"}
            ]
        },
        // {
        //     label: "Status", name: "status",
        //     options: [
        //         { key: "active", value: "Active" },
        //         { key: "inactive", value: "Inactive" }
        //     ]
        // }
    ]

    const onChange = (name, value) => {
        const updatedEmp = {
            ...updatedEmpData,
            [name]: value
        }
        setUpdatedEmpData(updatedEmp)
        console.log(updatedEmp)
    }

    return (
        <>
            <main>
                <Header 
                    title="Edit Employee"
                    options={
                        {
                            filter: false,
                            button: false
                        }
                    }
                    className="header"
                />
                <Form 
                    id="update-emp"
                    className="form-flex"
                    inputFields={inputFields}
                    inputSelects={inputSelects}
                    onChange= {onChange}
                    buttons={
                        [
                            {
                                label: "Update",
                                name: "update",
                                handleClick: onClick
                            },
                            {
                                label: "Cancel",
                                name: "cancel",
                                handleClick: onClick
                            }
                        ]
                    }
                />
            </main>
        </>
    );
}

export default UpdateEmployee;