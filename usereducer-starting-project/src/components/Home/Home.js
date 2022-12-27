import React, { useContext } from "react";
import AuthContext from "../../Store/auth-context";
import NoteContext from "../../Store/note-context";
// import NoteState from '../../Store/note-context-state';
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = () => {
  const ctx = useContext(AuthContext);
  console.log(ctx);

  const note = useContext(NoteContext);

  return (
    <React.Fragment>
      <Card className={classes.home}>
        <h1>Welcome back!</h1>
        <Button 
         onClick={ctx.onLogout} 
        //  onMouseMove={ctx.mouseIsMoving2}
        >
          LogOut
        </Button>
      </Card>

      <span style={{ textAlign: "center" }}>
        <div>
          I am {note.state.name} the{" "}
          {note.state.rank % 1 === 0 && note.state.rank + "th"}{" "}
          {note.state.designation}.
        </div>
        <div>
          I am taken from {note.state.takenFrom}.{" "}
          <b>{note.state.contextName}</b>
        </div>
        <div>All of this info is given by {note.randomPerson()}</div>
      </span>
    </React.Fragment>
  );
};

export default Home;
