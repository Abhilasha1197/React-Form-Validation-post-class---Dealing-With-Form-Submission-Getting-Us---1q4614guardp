import React, { useState, useRef } from 'react';
/**
 * @task :add validation to email, if email is not valid, if not valid email, dont allow to submit
 * @error_message :  "Email is invalid"  if email is wrong. (must be same message) 
 * 
 * 
 */

function App() {

const fnameRef = useRef();
  const emailRef = useRef();

  const userInfo = {

  };

  const[fields, setFields] = useState(userInfo);
  const[error, setError] = useState('');

     const[data, setData] = useState(userInfo);

      const getUserInformation = () =>{
        userInfo[fnameRef.current.id] = fnameRef.current.value;
        userInfo[emailRef.current.id] = emailRef.current.value;

        setFields({...userInfo} ,emailRef.current.value, fnameRef.current.value)
      }
      
     const submitForm = (event) => {
     event.preventDefault();

     if(!isValidEmail(emailRef.current.value)){
       setError('Email is invalid')
     }else {
      setData({lname:emailRef.current.value, fname:fnameRef.current.value})
    }
   }

   function isValidEmail(email) {
     return /\S+@\S+\.\S+/.test(email);
  }

  return(
    <div className="App">
      <h1>How About Them Apples</h1>
      <form>
        <fieldset>
          <label>
            <p>First Name</p>
            <input id='fname' name="name" ref={fnameRef} onChange={getUserInformation}/>
            <br></br>
            <p>Email</p>
            <input id='lname' name="name" ref={emailRef} onChange={getUserInformation}/>
            {error && <h2 style={{color: 'red'}}>{error}</h2>}
            <h3>Email is invalid</h3>
          </label>
        </fieldset>

        <button id='submit' type="submit" onClick={submitForm}>Submit</button>
      </form>
      {
        data.fname != undefined && (
          <div>
          <h1>{data.fname}</h1>
          <h2>{data.lname}</h2>
          </div>
        )
      }
    </div>
  )
}


export default App;
