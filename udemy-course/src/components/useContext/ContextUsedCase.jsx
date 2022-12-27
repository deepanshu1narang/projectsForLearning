import React, { useContext } from "react";
import NoteContext from "./store/notes-context";
import contextLimitations from "../../images/contextLimitations.png"

export default function ContextUsedCase() {
  const note = useContext(NoteContext);
  return (
    <React.Fragment>
      <span>
        <div>
          I am {note.state.name} the{" "}
          {note.state.rank % 1 === 0 && note.state.rank + "th"}{" "}
          {note.state.designation}.
        </div>
        <div>I am taken from {note.state.takenFrom}</div>
        <div>All of this info is given by {note.randomPerson()}</div>
        <img style={{height:"40%", width:"40%"}} src={contextLimitations} alt="Don't use context everywhere" />
        <h3>Reference: usereducer-satrting-project</h3>
        <p
          style={{
            textAlign: "justify",
            margin: "1vh 3vw",
            width: "90%",
            textDecoration: "underline",
            fontWeight: "900",
            fontSize: "1.3rem",
          }}
        >
          "KEY TAKEAWAYS: if I want to use the context for App.js then I need to
          wrap the App.js in the provider instead of giving it here... look...
          AuthContext was used for Home component and MainHeader component; and
          those components are wrapped in here..... Home component uses
          NoteState (Provider) too and Home is wrapped inside the provider
          too... App component is no exception and it has to be inside a
          provider if it needs to utilize any context no matter what"
        </p>
      </span>
    </React.Fragment>
  );
}
