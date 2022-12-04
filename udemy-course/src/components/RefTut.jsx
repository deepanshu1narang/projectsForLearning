import React, {useState, useRef} from 'react'

export default function RefTut() {
    const [vehicle, setVehicle] = useState("");
    const inputRef = useRef("something");

    function focus1(){
        inputRef.current.focus();
    }

    function refInfo(){
        console.log(inputRef);
        console.log(inputRef.current);
        console.log(inputRef.current.value);
    }

  return (
    <React.Fragment>
        <label>Preferred </label>
        <input ref={inputRef} value={vehicle} onChange={e => setVehicle(e.target.value)} />
        <div>I have {vehicle}</div>
        <button onClick={focus1}>Focus</button>{" "}
        <button onClick={refInfo}>Show ref info</button>
    </React.Fragment>
  )
}
