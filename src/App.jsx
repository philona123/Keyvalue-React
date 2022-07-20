// import logo from './logo.svg';
// import './App.css';
// import InputField from './components/InputField';
// import Button from './components/Button';
// import CreateEmployee from './CreateEmployee';
// import { useEffect, useState } from 'react';
// import { Counter } from './features/counter/Counter';

// function App() {
//   const onClick = () => {
//     const val = prompt('Enter your name');
//     console.log(val);
//   }
//   const [userName, setUserName] = useState("");
//   const [displayName, setDisplayName] = useState("");

//   const onChange = (value) => {
//     setUserName(value);
//   }

//   // useEffect(() => {
//   //   setDisplayName('Sample Name');
//   // }, [])

//   useEffect(() => {
//     if(userName)
//       setDisplayName(userName)
//     else 
//       setDisplayName('SampleName')
//   }, [userName])


//   return (
//     <div className="App">
//       <div>
//         <InputField label='UserName' onChange={onChange}/>
//         <InputField label='Password' onChange={onChange}/>
//         <Button label='Login' handleClick={() => {}} />
//         {displayName && <h1>Hello {displayName}</h1>}
//         <Counter />
//       </div>
//     </div>
//   );
//   // <CreateEmployee />
// }

// export default App;
import * as React from 'react'
import { useState } from 'react'
import { useGetEmployeesQuery, useAddEmployeeMutation, useUpdateEmployeeMutation } from './services/employee'

export default function App() {
  // Using a query hook automatically fetches data and returns query values
  // const { data, error, isLoading } = useGetEmployeesQuery()
  const initialValue = {
    id: "1c976051-9dd6-4221-8673-4f2f3c59d7e7",
    name: "connor",
    // username: employeeDetails.username,
    password: "abcdefgh",
    // age: employeeDetails.age,
    departmentId: "0a2aa235-1e9e-4d28-ae66-58698beb1df4",
    // isActive: true,
    role: "swe",
    address: {
      "city": "kochi",
      "state": "kerala",
      "pin": "123456"
    }
  }
  const [emp, setEmp] = useState(initialValue)
  // const [addEmployee, { isLoading, error}] = useAddEmployeeMutation()
  const [updateEmployee, {isLoading, error}] = useUpdateEmployeeMutation();
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  // const handleAddEmployee = async () => {
  //   try {
  //     await addEmployee(emp).unwrap()
  //     setEmp(initialValue)
  //   } catch {
  //     console.log({
  //       title: 'An error occurred',
  //       description: "We couldn't save your emp, try again!",
  //       status: 'error',
  //       duration: 2000,
  //       isClosable: true,
  //     })
  //   }
  // }

  const handleUpdateEmployee = async () => {
    try {
      await updateEmployee(emp).unwrap()
      setEmp(initialValue)
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

  return (
    <div className="App">
      <button onClick={handleUpdateEmployee}></button>
      
      {/* {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <> */}

          {/* {console.log(data.data.employees)}

          {(data.data.employees).map(emp => {
            return (
              <>
                <p>{emp.name}</p>
                <p>{emp.role}</p>
                <p>{emp.departmentId}</p>
                <p>{emp.city}</p>
                <p>{emp.state}</p>
                <p>{emp.pin}</p>
              </>      
            )
          })} */}
          {/* <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} /> */}
        {/* </>
      ) : null} */}
    </div>
  )
}