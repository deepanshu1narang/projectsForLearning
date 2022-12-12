import React from 'react';
import { useRef } from 'react';
import { useState, useEffect } from 'react';
import Counter1 from './useReducer/Counter1';

export default function LoginScreen(props) {

    function validEmail(email){
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
            return true;
        else
            return false;
    }

    function validPassword(password){
        if(password.trim().length > 6) 
            return true;
        else
            return false;
    }

    const emailRef = useRef();
    const passwordRef = useRef();

    const [cred, setCred] = useState({
        email: "",
        password: "", 
    });
    const [validForm, setValidForm] = useState(false);
    const [message, setMessage] =useState("");

    function invalid(){
        if(cred.email.trim().length>0 && cred.password.length>0){
            if(!validForm){
                if(!validEmail(cred.email) && !validPassword(cred.password)){
                    setMessage("invalid email and password");
                }
                else if(!validEmail(cred.email)){
                    setMessage("invalid email");
                }
                else if(!validPassword(cred.password)){
                    setMessage("invalid password");
                }
            }
            else if(validForm){
                setMessage(null);
            }
        }
    }

    useEffect(() => {
        setValidForm(validEmail(cred.email) && validPassword(cred.password));
        const validator = setTimeout(() => {
            invalid();
        }, 500);
        
        return () => {
            clearTimeout(validator);
        }
    }, [validForm, cred, message, invalid]);

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

    const logMeIn = (e) => {
        e.preventDefault();
        if(!validEmail(cred.email) || !validPassword(cred.password)){
            return;
        }
        else if(validEmail(cred.email) && validPassword(cred.password)){
            props.logIn();
        }
    }

  return (
    <>
    <form onSubmit={logMeIn} autoComplete="off" >
        <h2>Log in to check some challenges</h2>
        <div>
            <label>Email: </label>
            <input ref={emailRef} name='email' value={cred.email} onChange={changeHandler} type="email" placeholder='abc@example.com'/>
        </div>
        <div>
            <label>Password: </label>
            <input ref={passwordRef} name='password' value={cred.password} onChange={changeHandler} type="password" placeholder='password'/>
        </div>
        <div hidden={!validForm ? true : false}>
            <button id="logInButton">Log in</button>
        </div>
        <div style={{color:"red"}}>{message}</div>
    </form>
    <h4>
        Don't know the credentials: play counter game.
    </h4>
    <Counter1 />
    <p>Log in to check a better example</p>
    </>

  );
}

// disabled={cred.email==="" || cred.password==="" ? true : false}
// onMouseOver={logInPlease}