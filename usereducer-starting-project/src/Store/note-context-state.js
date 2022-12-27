import React, { useEffect, useState } from 'react';
import NoteContext from "./note-context";

const characters ='abcdefghijklmnopqrstuvwxyz';

function randomName(letters){
    let name = "";
    for(let i=0; i<letters; i++){
        name+= characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return name[0].toUpperCase() + name.slice(1);
}

const fullName = () => randomName(Math.floor(Math.random()* 12 + 3)) + " " + randomName(Math.floor(Math.random()* 12 + 4))

export default function NoteState(props) {

    const s1 = {
        name: fullName(),
        designation: "Hokage",
        rank: 7,
        takenFrom: "a state made in context",
        contextName: "unkown context"
    }

    const [state, setState] = useState(s1);

    const update = () => {
        setTimeout(() => {
           setState((prevValue) => {
            return {
                name: "Sasuke Uchiha",
                designation: "Shadow ".concat(prevValue.designation),
                rank: Math.random(),
                takenFrom: prevValue.takenFrom,
                contextName: "NoteContext -- majorly from its state"
            }
           })
        }, 2000);
    }

    const randomPerson = () => fullName();

    useEffect(() => {
        update();
    }, []);

  return (
    <NoteContext.Provider value={{state, randomPerson}}>
    {/* <NoteContext.Provider value={{state: state, randomPerson: randomPerson}}> */}
      {props.children}
    </NoteContext.Provider>
  )
}
