import React, { useState } from 'react'
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {

  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:"",
  });

  // User Login Function
  const login = async () => {
    console.log(formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    
    if(responseData.success) {
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.error);
    }
  }

  // User Sign Up Function
  const signUp = async () => {
    console.log(formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    
    if(responseData.success) {
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.error);
    }

  }

  // OnChange Handler Function
  const changeHandler = (e) => {
      setFormData({...formData,[e.target.name]:e.target.value});
  }

  return (
    <div className='login-signup'>
        <div className="login-signup-container">
            <h1>{state}</h1>
            <div className="login-signup-input-fields">
                {state==="Sign Up"?<input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder='Your name...' />:<></>}
                <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder='Your email...' />
                <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder='Your password...' />
            </div>
            <button onClick={()=>{state==="Login" ? login() : signUp()}}>Continue</button>
            {state==="Sign Up" ? <p className='loginsignup-login'>Already have an account ? <span onClick={()=>{setState("Login")}}>Login Here..</span></p> :
             <p className='loginsignup-login'>Don't have an account ? <span onClick={()=>{setState("Sign Up")}}>Sign Up Here...</span></p> }
            <div className="privacy-agree">
                <input type="checkbox" name='' id=''/>
                <h3>By continuing, i agree to the term of use & privacy policy</h3>
            </div>
        </div>
    </div>
  )
}

export default LoginSignUp
