import React from 'react'

export default function List(props) {
  return (
    <div id="toDoCard">
        <h4><i>Task {props.taskNo}</i>
        <input className='rightMost' type="checkbox" id="completedStatus" /></h4>
        <div>
            <p>
                {props.taskAdded}
            </p>
        </div> 
        <button onClick={props.toggleTask}>{props.completed ? "done" : "incomplete"}</button>{" "}
        <button onClick={props.deleteTask}>Delete</button>{" "}
        
        {/* <input type="checkbox" /> */}
    </div>
  )
}
