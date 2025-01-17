import {useState} from 'react'
import axios from "axios";

export default function Signup() {
  const[value, setValue]=useState({
    name:"",
    email:"",
    password:"",
  });
  
  const handleChange=(e)=>{
    setValue({
      ...value, 
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const register=await axios.post("http://localhost:5000/register",value);
    console.log(register.data);
    setValue({
      name:"",
      email:"",
      password:"",
    });
    alert("Account Created");
  };
  return (
    <>
    <div className='container'>
        <h2> Sign Up </h2>
        <form onSubmit = {handleSubmit}>
            <input placeholder='name' onChange={handleChange} value={value.name} name='name'></input>
            <input placeholder='email' onChange={handleChange} value={value.email} name='email'></input>
            <input placeholder='password' onChange={handleChange} value={value.password} name='password'></input>
            <button type='submit'>Signup</button>
        </form>
    </div>
    </>
  );
}
