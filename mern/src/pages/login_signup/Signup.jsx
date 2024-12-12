import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  const[email,setemail] = useState()
  const[password,setpassword] = useState()
  
  const onsubmit= async(e) =>{
     try{
      const sendSign = await fetch(`http://localhost:2000/user/Signup`,{
        method:"POST",
        headers:{
          'content-Type':"application/json"
        },
        body:JSON.stringify({email,password})
      })
      const response = await sendSign.json();

      if(sendSign.ok){
        alert("Registration Sucessfull")
        console.log(response)
      }else{
        alert("Registration Failed")
      }
     } catch(error) {
         console.log(error);
     }
  };
  return (
    <div>
      <div>
        <h1>Signup</h1>
        <div>
        <div>
            <input type='email' name='email' id ="" placeholder='Email' onChange={(e)=>setemail(e.target.value)}/>
            <input type='password' name='password' id='' placeholder='Password' onChange={(e)=>setpassword(e.target.value)}/>
            <button onClick={onsubmit} type='submit'>Sign Up</button>
        </div>
        <div>
        <div>
            <p>have an account?<Link to='/login'>Login</Link></p>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
