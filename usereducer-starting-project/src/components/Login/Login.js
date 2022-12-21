// //////////// check Login2 and Login3 for reference

//////////////////////////////////////////////////////////////

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

const Login = (props) => {

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, initialEmailState);
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, initialPasswordState);

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

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
  }, [emailIsValid, passwordIsValid, formIsValid]);
  // }, [emailState.isValid, passwordState.isValid, formIsValid]); ----- also good

  const emailChangeHandler = (event) => {
    dispatchEmail({type: "USER_INPUT_EMAIL", value: event.target.value, isValid: event.target.value.includes("@")});
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: "USER_INPUT_PASSWORD", value: event.target.value, isValid: event.target.value.trim().length > 6});
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: "INPUT_EMAIL_BLUR"});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: "INPUT_PASSWORD_BLUR"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };  


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
        </div>
      </form>
    </Card>
  );
};

export default Login;
