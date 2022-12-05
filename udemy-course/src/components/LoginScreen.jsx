import React from 'react';
import { useState } from 'react';

export default function LoginScreen(props) {

    // const [disabled1, setDisabled] = useState(true);

    const [cred, setCred] = useState({
        email: "",
        password: "", 
    });
    const [message, setMessage] =useState("");

    const changeHandler = (e) => {
        const {name, value} = e.target;

        setCred(prevVal => {
            if(name==="email"){
                return{
                    email: value,
                    password: prevVal.password
                }
            }
            else if(name==="password"){
                return{
                    email: prevVal.email,
                    password: value
                }
            }
        });
    }

    const logMeIn = () => {
        if(cred.email==="" || cred.password===""){
            if(cred.email==="" && cred.password==="")
                setMessage("email and password can't be empty");
            else if(cred.email==="")
                setMessage("email can't  be empty");
            else if(cred.password==="")
                setMessage("password can't be empty");
            return;
        }
        else{
            // setDisabled(false);
            props.logIn();
            console.log("ok");
        }
    }

  return (
    <div>
        <h2>Log in to check some challenges</h2>
        <div>
            <label>Email: </label>
            <input name='email' value={cred.email} onChange={changeHandler} type="email" placeholder='abc@example.com'/>
        </div>
        <div>
            <label>Password: </label>
            <input name='password' value={cred.password} onChange={changeHandler} type="password" placeholder='password'/>
        </div>
        <div>
            <button disabled={cred.email==="" || cred.password==="" ? true : false} onClick={logMeIn}>Log in</button>
            <p style={{color:"red"}}>{message}</p>
        </div>
    </div>
  );
}
