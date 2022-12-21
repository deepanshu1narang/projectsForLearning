import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const initialEmailState = {value: "", isValid: false};

const emailReducer = (state, action) => {
    switch(action.type){
        case "USER_INPUT_EMAIL":
            return {value: action.value, isValid: action.value.includes("@")}
        case "INPUT_EMAIL_BLUR":
            return {value: state.value, isValid: state.value.includes("@")}
        default:
            return initialEmailState;
    }
}

const initialPasswordState = {value: "", isValid: false};

const passwordReducer = (state, action) => {
    switch(action.type){
        case "USER_INPUT_PASSWORD":
            return {value: action.value, isValid: action.value.trim().length > 6};
        case "INPUT_PASSWORD_BLUR":
            return {value: state.value, isValid: state.value.trim().length > 6}
        default:
            return initialPasswordState;
    }
}


const Login2 = (props) => {
//   i'm gonna remove the following two states with one using useReducer ...... reference is emailState 
//   const [enteredEmail, setEnteredEmail] = useState('');
//   const [emailIsValid, setEmailIsValid] = useState();

//   i'm gonna remove the following two states with one using useReducer ...... reference is passwordState 
//   const [enteredPassword, setEnteredPassword] = useState('');
//   const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

    // const [state, dispatch] = useReducer(reducer, initialState, initialFunction);
    // reducer function can be created outside of scope of the component function

    // reducer on email state
  const [emailState, dispatchEmail] = useReducer(emailReducer, initialEmailState);

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, initialPasswordState);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type: "USER_INPUT_EMAIL", value: event.target.value, isValid: event.target.value.includes("@")});

    // setFormIsValid(
    //   emailState.value.includes('@') && passwordState.value.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type: "USER_INPUT_PASSWORD", value: event.target.value, isValid: event.target.value.trim().length > 6})

    // setFormIsValid(
    //   emailState.value.includes('@') && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.value.includes('@'));
    dispatchEmail({type: "INPUT_EMAIL_BLUR"});
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(passwordState.value.trim().length > 6);
    dispatchPassword({type: "INPUT_PASSWORD_BLUR"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );
    }, 1000);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailState, passwordState]);

  console.log(emailState, passwordState);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
          <Button>
            random
          </Button>
        </div>
      </form>
      <p>random paragraph</p>
    </Card>
  );
};

export default Login2;
