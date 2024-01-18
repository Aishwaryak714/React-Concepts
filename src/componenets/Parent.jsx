import React, { useState } from 'react';
import Child from './Child';

const empdata=[
    {
        fname:"Aishwarya",lname:"Kumtale",email:"aishwaryakumtale108@gmail.com",phone:"7083793935"
    },
    {
        fname:"nikita",lname:"Katole",email:"nikitakatole@gmail.com",phone:"7083793905"
    }
]



function Parent() {
    const [data,setData]=useState(empdata);


    const handleData = (fdata) => {
        setData(fdata); 
    };


  return (
    <div>
        <h4>Passing data from child to parent/ Lifting state up using callback function</h4>
        <Child handleData={handleData} data={data} setData={setData}/>
    </div>
  )
}

export default Parent