import React, {useReducer, useState} from 'react';
import Contact from './Contact';

const initialState = [
    {
        id: Date.now(),
        name: "",
        email: ""
    }
];

const reducer = (state, action) => {
    switch (action.type){
        case "add":
            return [...state, action.payload].filter(contact => contact.name.trim().length !== 0);
        case "delete":
            return state.filter(contact => {
                return contact.id !== action.payload.id;
            })
        default:
            return;
    }
}

export default function BetterUseCaseOfUseReducer() {

    // const [state, dispatch] = useReducer(reducer, initialState, initialFunction);
    const [state, dispatch] = useReducer(reducer, initialState);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    console.log(state);
    const addContact = (e) => {
        e.preventDefault();
        const contact = {
            id: Date.now(),
            name,
            email
        }
        setName("");
        setEmail("");
        dispatch({type: "add", payload: contact});
        console.log(Contact);
    }


  return (
    <div>
        <h3>A better example of useReducer for premium users only.</h3>
        <form onSubmit={addContact} className="label-inside-input">
            <div id="fields">    
                <div className='label'>
                    <label>Name:</label>
                </div>
                <div> 
                    <input name="name1" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='label'>
                    <label>Email:</label>
                </div>
                <div>
                    <input name="email1" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>       
            </div>
            <div>
                <button>Add Contact</button>
            </div>
        </form>


        <div>
            <ul type="none">
            {state.filter(contact => contact.name.trim().length > 0).map((contact, i) => {
                return (
                    <li key={contact.id}>
                        <Contact rank={i+1} name={contact.name} email={contact.email} deleteIt={() => {
                            dispatch({type: "delete", payload: {id: contact.id} })
                        }}/>
                    </li>
                    )
            })}
            </ul>
        </div>
    </div>
  )
}
