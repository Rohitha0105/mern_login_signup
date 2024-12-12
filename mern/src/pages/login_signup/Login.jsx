import React,{useState}from 'react';
import Style from './Login.module.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const login = () => {

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  const onSubmit = async(e)=> {
      e.preventDefault();
   try{
      const sendSign = await fetch(`http://localhost:2000/user/login`,{
        method: "POST",
        headers:{
          'content-Type':"application/json",
        },
        body:JSON.stringify({email,password}),

      });

      const response = await sendSign.json();
      if(sendSign.ok){
        alert("User Login Successful")
        navigate('/home')
        localStorage.setItem("token",response.token)
      }else{
        alert("Invalid email or password")
      }
   }catch (error){
    console.log(error);
   }
  }

  return (
    <div className={Style.full}>
      <div className={Style.container}>
          <div className={Style.space}>
            <h1 className={Style.heading}>Login</h1>
            <input type='text' name='email' id ="" placeholder='Email' onChange={(e) => setemail(e.target.value)}/><br/>
            <input type='text' name='password' id='' placeholder='Password' onChange={(e) => setpassword(e.target.value)}/><br/>
            <button className={Style.button} onClick={onSubmit}>Login</button><br/>
            <p>dont have an account?<Link to='/signup'>Sign up</Link></p>
          </div>        
      </div>
    </div>
  );
};

export default login;